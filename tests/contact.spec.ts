import { test, expect } from '@playwright/test';
import ContactPage from '../pages/Contact-page';
import { generateRandomText } from '../helper/random';

test('get started link', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.goToPage();
  await contactPage.fillContactForm('John', 'Doe', 'johndoe@me.com', 'Webmaster', generateRandomText(222));
  await contactPage.clickSubmitButton();

  await expect(contactPage.verifySuccessMessage()).toBeTruthy();
});