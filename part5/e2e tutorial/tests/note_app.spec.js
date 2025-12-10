const { test, expect, describe, beforeEach } = require('@playwright/test');
const { login, createNote } = require('./helper');
const { create } = require('domain');


describe('Note app', () => {
  beforeEach(async ({ page, request }) => {
    await request.post('/api/test/reset');
    await request.post('/api/users', {
      data: {
        username: 'petertheapostle',
        name: 'Peter',
        password: '777'
      }
    })

    await page.goto('/');
  })

  test('front page can be opened', async ({ page }) => {
    const locator = page.getByText('Notes');
    await expect(locator).toBeVisible();
    await expect(page.getByText('Note app, Department of Computer Science, University of Helsinki 2025')).toBeVisible();
  });

  test('user can log in', async ({ page }) => {
    const locator = page.getByText('Notes');
    await expect(locator).toBeVisible();

    await login(page, 'petertheapostle', '777');

    const filterButton = await page.getByText('show only important notes');
    await expect(filterButton).toBeVisible();
  });

  test('login fails with wrong password', async ({ page }) => {
    await login(page, 'petertheapostle', 'wrong');
    await expect(page.getByText('show only important notes')).not.toBeVisible();
  });

  describe('when logged in', () => {
    beforeEach(async ({ page }) => {
      await login(page, 'petertheapostle', '777');

      const filterButton = await page.getByText('show only important notes');
      await expect(filterButton).toBeVisible();
    })

    test('a new note can be created', async ({ page }) => {
      await createNote(page, 'a note created by playwright');

      const newNote = await page.getByText('a note created by playwright');
      await expect(newNote).toBeVisible();
    })

    describe('note exists', () => {
      beforeEach(async ({ page }) => {
        await createNote(page, 'another note by playwright');
      })
  
      test('importance can be changed', async ({ page }) => {
        const anotherNote = await page.getByText('another note by playwright');
        await expect(anotherNote).toBeVisible();

        await page.getByRole('button', { name: 'mark as important' }).click()
        await expect(page.getByText('mark as non-important')).toBeVisible()
      })
    });
  });
})
