import { browser, by, element } from 'protractor';

export class DonationTestingPage {
  navigateTo() {
    return browser.get('/');
  }

  getProjectImage() {
    return element(by.tagName('img'));
  }

  getTotalAmountDonated() {
    return element(by.css('.amount-donated')).getText();
  }

  getDescriptionTotalAmountDonated() {
    return element(by.css('.total-donated')).getText();
  }

  getAskingForDonation() {
    return element(by.css('.card-body p')).getText();
  }

  getFormMakeADonation() {
    return element(by.tagName('form'));
  }

  getInputForAmount() {
    return element(by.tagName('input'));
  }

  getButtonForDonate() {
    return element(by.tagName('button'));
  }

  makeADonation(amount: number) {
    element(by.tagName('input')).sendKeys(amount);
    element(by.tagName('button')).click();
  }

  getLabelDescriptionForInput() {
    return element(by.tagName('label')).getText();
  }

  getLabelForInput() {
    return element(by.tagName('label'));
  }
}
