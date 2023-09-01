import { test, expect } from '@playwright/test';
import ContactPage from '../pages/ContactPage';

/**
 * Generates a random text of the specified length.
 *
 * @param {number} length - The length of the random text to generate.
 * @return {string} The randomly generated text.
 */
function generateRandomText(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomText = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
}

test('get started link', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.goToPage();
  await contactPage.clickGetStartedLink();
  await contactPage.fillContactForm('John', 'Doe', 'johndoe@me.com', 'Webmaster', generateRandomText(222));
  await contactPage.clickSubmitButton();

  await expect(contactPage.verifySuccessMessage()).toBeTruthy();
});