import { browser, by, element } from "protractor";

export class HeadTestingPage {
  navigateTo(done: DoneFn) {
    browser.get("/");
    done();
  }

  getBannerTitleText() {
    return element(by.css(".main-container h1")).getText();
  }

  getBannerText() {
    return element(by.css(".main-container p")).getText();
  }
}
