import { async } from "@angular/core/testing";
import { HeadTestingPage } from "./head.po";

describe("angular-e2e-sample head testing", () => {
  let page: HeadTestingPage;

  beforeEach(() => {
    page = new HeadTestingPage();
  });

  it("should display banner content correctly", async(async () => {
    await page.navitateTo();

    expect(await page.getBannerTitleText()).toEqual("Donation");
    expect(await page.getBannerText()).toEqual(
      "Leave us a donation. It will be very helpful."
    );
  }));
});
