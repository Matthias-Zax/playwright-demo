import { Page } from 'playwright';

class ContactPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToPage(): Promise<void> {
    await this.page.goto('https://practicesoftwaretesting.com/#/');
  }

  async clickGetStartedLink(): Promise<void> {
    await this.page.waitForSelector('a', { text: 'Contact' });
    await this.page.click('a', { text: 'Contact' });
  }

  async fillContactForm(firstName: string, lastName: string, email: string, subject: string, message: string): Promise<void> {
    await this.page.fill('[data-test="first-name"]', firstName);
    await this.page.fill('[data-test="last-name"]', lastName);
    await this.page.fill('[data-test="email"]', email);
    await this.page.selectOption('[data-test="subject"]', { label: subject });
    await this.page.fill('[data-test="message"]', message);
  }

  async clickSubmitButton(): Promise<void> {
    await this.page.click('[data-test="contact-submit"]');
  }

  async verifySuccessMessage(): Promise<boolean> {
    return await this.page.waitForSelector('body', { text: 'Thanks for your message! We will contact you shortly.' }) !== null;
  }
}

export default ContactPage;