import { async } from "@angular/core/testing";
import { DonationTestingPage } from "./donation.po";

describe("angular-e2e-sample donation testing", () => {
  let page: DonationTestingPage;

  beforeEach(() => {
    page = new DonationTestingPage();
  });

  it("should display project image", async(async () => {
    await page.navigateTo();

    expect(await page.getProjectImage().isDisplayed()).toBeTruthy();
  }));

  it("should display total amount of donation equals to zero at first time", async(async () => {
    await page.navigateTo();

    expect(await page.getTotalAmountDonated()).toEqual("0");
  }));

  it("should display total donated", async(async () => {
    await page.navigateTo();

    expect(await page.getDescriptionTotalAmountDonated()).toEqual(
      "Total Donated: $ 0"
    );
  }));

  it("should display the asking for donation", async(async () => {
    await page.navigateTo();

    expect(page.getAskingForDonation()).toContain(
      "Make a donation for this project"
    );
  }));

  it("should display a form containing a input for get donation amount and a button to make the donation", async(async () => {
    await page.navigateTo();

    expect(await page.getFormMakeADonation().isDisplayed()).toBeTruthy();
    expect(await page.getInputForAmount().isDisplayed()).toBeTruthy();
    expect(await page.getButtonForDonate().isDisplayed()).toBeTruthy();
  }));

  it("should change the total donated when a new donation is made", async(async () => {
    await page.navigateTo();

    page.makeADonation(10);

    expect(await page.getTotalAmountDonated()).toEqual("10");
  }));

  it("should display the label for the input field when it is filled", async(async () => {
    page.navigateTo();

    const inputField = page.getInputForAmount();
    await inputField.sendKeys(10);

    expect(await page.getLabelForInput().isDisplayed()).toBeTruthy();
  }));

  it("should display the label for the input field exactly equals to it placeholder when it is filled", async(async () => {
    page.navigateTo();

    const inputField = page.getInputForAmount();
    await inputField.sendKeys(10);

    expect(await page.getLabelDescriptionForInput()).toEqual("*Amount");
  }));
});
