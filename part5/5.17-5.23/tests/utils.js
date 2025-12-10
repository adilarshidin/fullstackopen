const loginWith = async (page, username, password) => {
  await page.getByLabel('Username').fill(username ?? '');
  await page.getByLabel('Password').fill(password ?? '');
  await page.getByRole('button', { name: 'submit' }).click();
};

const createBlog = async (page, title, author) => {
  await page.getByRole('button', { name: 'Add a new blog' }).click();
  await page.getByLabel('Title').fill(title);
  await page.getByLabel('Author').fill(author);
  await page.getByLabel('URL').fill('some url');
  await page.getByRole('button', { name: 'Submit' }).click();
};


module.exports = { loginWith, createBlog };
