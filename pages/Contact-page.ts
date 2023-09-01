import { expect, type Locator, type Page } from '@playwright/test';

class ContactPage {
  readonly page: Page;
  readonly getFirstNameInput: Locator;
  readonly getLastNameInput: Locator;
  readonly getEmailInput: Locator;
  readonly selectSubject: Locator;
  readonly getMessageTextArea: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getFirstNameInput = page.locator('[data-test="first-name"]');
    this.getLastNameInput = page.locator('[data-test="last-name"]');
    this.getEmailInput = page.locator('[data-test="email"]')
    this.selectSubject = page.locator('[data-test="subject"]')
    this.getMessageTextArea = page.locator('[data-test="message"]');
  }

  async goToPage() {
    await this.page.goto('https://practicesoftwaretesting.com/#/contact');
  }

  async fillContactForm(firstName: string, lastName: string, email: string, subject: string, message: string): Promise<void> {
    await this.getFirstNameInput.fill(firstName);
    await this.getLastNameInput.fill(lastName);
    await this.getEmailInput.fill(email);
    await this.selectSubject.selectOption({ label: subject });
    await this.getMessageTextArea.fill(message);
  }

  async clickSubmitButton(): Promise<void> {
    await this.page.click('[data-test="contact-submit"]');
  }

  async verifySuccessMessage(): Promise<boolean> {
    return await this.page.waitForSelector('body', { text: 'Thanks for your message! We will contact you shortly.' }) !== null;
  }
}

export default ContactPage;