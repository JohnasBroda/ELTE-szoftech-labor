import { DonationTestingPage } from "./donation.po";

describe("angular-e2e-sample donation testing", () => {
  let page: DonationTestingPage;

  beforeEach(() => {
    page = new DonationTestingPage();
  });

  it("should display project image", (done) => {
    page.navigateTo(done);

    expect(page.getProjectImage().isDisplayed()).toBeTruthy();
  });

  it("should display total amount of donation equals to zero at first time", (done) => {
    page.navigateTo(done);

    expect(page.getTotalAmountDonated()).toEqual("0");
  });

  it("should display total donated", (done) => {
    page.navigateTo(done);

    expect(page.getDescriptionTotalAmountDonated()).toEqual(
      "Total Donated: $ 0"
    );
  });

  it("should display the asking for donation", (done) => {
    page.navigateTo(done);

    expect(page.getAskingForDonation()).toContain(
      "Make a donation for this project"
    );
  });

  it("should display a form containing a input for get donation amount and a button to make the donation", (done) => {
    page.navigateTo(done);

    expect(page.getFormMakeADonation().isDisplayed()).toBeTruthy();
    expect(page.getInputForAmount().isDisplayed()).toBeTruthy();
    expect(page.getButtonForDonate().isDisplayed()).toBeTruthy();
  });

  it("should change the total donated when a new donation is made", (done) => {
    page.navigateTo(done);
    page.makeADonation(10);

    expect(page.getTotalAmountDonated()).toEqual("10");
  });

  it("should display the label for the input field when it is filled", (done) => {
    page.navigateTo(done);

    const inputField = page.getInputForAmount();
    inputField.sendKeys(10);

    expect(page.getLabelForInput().isDisplayed()).toBeTruthy();
  });

  it("should display the label for the input field exactly equals to it placeholder when it is filled", (done) => {
    page.navigateTo(done);

    const inputField = page.getInputForAmount();
    inputField.sendKeys(10);

    expect(page.getLabelDescriptionForInput()).toEqual("*Amount");
  });
});
