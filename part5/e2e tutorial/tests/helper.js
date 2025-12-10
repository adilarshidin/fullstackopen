const login = async (page, username, password) => {
  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button').click();
};

const createNote = async (page, content) => {
  await page.getByRole('textbox').fill(content);
  await page.getByRole('button', { name: 'save' }).click();
  await page.getByText(content).waitFor();
};


export { login, createNote };
