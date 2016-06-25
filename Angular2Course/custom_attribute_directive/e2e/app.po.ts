export class CustomAttributeDirectivePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cad-root h1')).getText();
  }
}
