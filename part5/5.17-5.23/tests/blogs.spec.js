const { test, expect, beforeEach, describe } = require('@playwright/test');
const { loginWith, createBlog } = require('./utils');


describe('Blog app', () => {
  beforeEach(async ({ request, page }) => {
    await page.goto('/');
  });

  test('Login form is shown', async ({ page }) => {
    await expect(page.getByText('Please enter your username and password to login')).toBeVisible({ timeout: 3000 });
    await expect(page.getByLabel('Username')).toBeVisible({ timeout: 3000 });
    await expect(page.getByLabel('Password')).toBeVisible({ timeout: 3000 });
    await expect(page.getByRole('button', { name: 'submit ' })).toBeVisible({ timeout: 3000 });
  });

  describe('logging in', () => {
    beforeEach(async ({ request }) => {
      await request.post('/api/test/reset');
      await request.post('/api/users', {
        data: {
          username: 'paultheapostle',
          name: 'Paul',
          password: '777'
        }
      });
      await request.post('/api/users', {
        data: {
          username: 'petertheapostle',
          name: 'Peter',
          password: '888'
        }
      });
    });

    test('valid credentials', async ({ page }) => {
      await loginWith(page, 'paultheapostle', '777');
      await expect(page.getByText('User: Paul')).toBeVisible({ timeout: 3000 });
    });

    test('invalid username', async ({ page }) => {
      await loginWith(page, 'paulapostle', '777');
      await expect(page.getByText('User does not exist.')).toBeVisible({ timeout: 3000 });
      await expect(page.getByText('User: Paul')).not.toBeVisible({ timeout: 3000 });
    });

    test('invalid password', async ({ page }) => {
      await loginWith(page, 'paultheapostle', 'wrong');
      await expect(page.getByText('Invalid username and/or password.')).toBeVisible({ timeout: 3000 });
      await expect(page.getByText('User: Paul')).not.toBeVisible({ timeout: 3000 });
    });

    test('no username', async ({ page }) => {
      await loginWith(page, null, '777');
      await expect(page.getByText('Missing username and/or password.')).toBeVisible({ timeout: 3000 });
      await expect(page.getByText('User: Paul')).not.toBeVisible({ timeout: 3000 });
    });

    test('no password', async ({ page }) => {
      await loginWith(page, 'paultheapostle', null);
      await expect(page.getByText('Missing username and/or password.')).toBeVisible({ timeout: 3000 });
      await expect(page.getByText('User: Paul')).not.toBeVisible({ timeout: 3000 });
    });

    describe('logged in', () => {
      beforeEach(async ({ page }) => {
        await loginWith(page, 'paultheapostle', '777');
        await page.getByText('User: Paul').waitFor();
      });

      test('create a blog', async ({ page }) => {
        const title = 'some title';
        const author = 'some author';

        await createBlog(page, title, author);
        await expect(page.getByText(title)).toBeVisible({ timeout: 3000 });
        await expect(page.getByText(`Author: ${author}`)).toBeVisible({ timeout: 3000 });
      });

      describe('with existing blog', () => {
        beforeEach(async ({ page }) => {
          const title = 'some title';
          const author = 'some author';
          await createBlog(page, title, author);
        });

        test('like the existing blog', async ({ page }) => {
          await page.getByText('view').click();
          await expect(page.getByText('Likes: 0')).toBeVisible({ timeout: 3000 });
          await page.getByRole('button', { name: '❤️ Like' }).click();
          await expect(page.getByText('Likes: 1')).toBeVisible({ timeout: 3000 });
        });

        test('delete the existing blog', async ({ page }) => {
          await page.getByText('view').click();
          await page.getByRole('button', { name: 'Delete blog' }).click();
          await expect(page.getByText('some title')).toBeVisible({ timeout: 3000 });
          await expect(page.getByText('Author: some author')).toBeVisible({ timeout: 3000 });
        });
      });

      describe('with existing blog of another user', () => {
        beforeEach(async ({ page }) => {
          await page.getByRole('button', { name: 'Logout' }).click();
          await loginWith(page, 'petertheapostle', '888');
          await expect(page.getByText('User: Peter')).toBeVisible({ timeout: 3000 });

          const title = 'some title';
          const author = 'some author';

          await createBlog(page, title, author);
          await expect(page.getByText(title)).toBeVisible({ timeout: 3000 });
          await expect(page.getByText(`Author: ${author}`)).toBeVisible({ timeout: 3000 });

          await page.getByRole('button', { name: 'Logout' }).click();
          await loginWith(page, 'paultheapostle', '777');
          await expect(page.getByText('User: Paul')).toBeVisible({ timeout: 3000 });
        });

        test('can not see delete button', async ({ page }) => {
          await page.getByRole('button', { name: 'view' }).click();
          await expect(page.getByRole('button', { name: 'Delete blog' })).not.toBeVisible({ timeout: 3000 });
        });

        test('blogs are in descending order based off likes', async ({ page }) => {
          const title = 'some other title';
          const author = 'some other author';

          await createBlog(page, title, author);
          await expect(page.getByText(title)).toBeVisible({ timeout: 3000 });
          await expect(page.getByText(`Author: ${author}`)).toBeVisible({ timeout: 3000 });

          await page.waitForSelector('.blog');
          const blogs = await page.locator('.blog');
          const firstBlog = await blogs.first();
          const secondBlog = await blogs.nth(1);

          await expect(firstBlog).toBeVisible();
          await expect(secondBlog).toBeVisible();

          await firstBlog.getByRole('button', { name: 'view' }).click();
          await secondBlog.getByRole('button', { name: 'view' }).click();

          const firstBlogLikeButton = await firstBlog.getByRole('button', { name: '❤️ Like' });
          const secondBlogLikeButton = await secondBlog.getByRole('button', { name: '❤️ Like' });

          await firstBlogLikeButton.click();
          await expect(firstBlog.getByText('Likes: 1')).toBeVisible();

          await secondBlogLikeButton.click();
          await expect(secondBlog.getByText('Likes: 1')).toBeVisible();
          await secondBlogLikeButton.click();
          await expect(secondBlog.getByText('Likes: 2')).toBeVisible();

          await page.reload();
          await page.waitForSelector('.blog');
          const blogsAfterReload = await page.locator('.blog');
          const firstBlogAfterReload = await blogsAfterReload.first();
          const secondBlogAfterReload = await blogsAfterReload.nth(1);
          await expect(firstBlogAfterReload.getByText('Likes: 2')).toContainText('Likes: 2');
          await expect(secondBlogAfterReload.getByText('Likes: 1')).toContainText('Likes: 1');
        });
      });
    });
  });
});
