import { HeadTestingPage } from "./head.po";

describe("angular-e2e-sample head testing", () => {
  let page: HeadTestingPage;

  beforeEach(() => {
    page = new HeadTestingPage();
  });

  it("should display banner content correctly", (done) => {
    page.navigateTo(done);

    expect(page.getBannerTitleText()).toEqual("Donation");
    expect(page.getBannerText()).toEqual(
      "Leave us a donation. It will be very helpful."
    );
  });
});
