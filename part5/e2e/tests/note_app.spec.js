const { test, expect, describe, beforeEach } = require('@playwright/test');


describe('Note app', () => {
  beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3001');
  })

  test('front page can be opened', async ({ page }) => {
    const locator = page.getByText('Notes');
    await expect(locator).toBeVisible();
    await expect(page.getByText('Note app, Department of Computer Science, University of Helsinki 2025')).toBeVisible();
  });

  test('user can log in', async ({ page }) => {
    const locator = page.getByText('Notes');
    await expect(locator).toBeVisible();

    await page.getByLabel('Username').fill('petertheapostle');
    await page.getByLabel('Password').fill('777');
    await page.getByRole('button').click();
    
    const filterButton = await page.getByText('show only important notes');
    await expect(filterButton).toBeVisible();
  });

  describe('when logged in', () => {
    beforeEach(async ({ page }) => {
      await page.getByLabel('username').fill('petertheapostle');
      await page.getByLabel('password').fill('777');
      await page.getByRole('button').click();

      const filterButton = await page.getByText('show only important notes');
      await expect(filterButton).toBeVisible();
    })

    test('a new note can be created', async ({ page }) => {
      await page.getByRole('textbox').fill('a note created by playwright');
      await page.getByRole('button', { name: 'save' }).click();

      const newNote = await page.getByText('a note created by playwright');
      await expect(newNote).toBeVisible();
    })
  });
})
