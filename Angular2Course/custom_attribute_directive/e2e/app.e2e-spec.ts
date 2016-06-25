import { CustomAttributeDirectivePage } from './app.po';

describe('custom-attribute-directive App', function() {
  let page: CustomAttributeDirectivePage;

  beforeEach(() => {
    page = new CustomAttributeDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cad works!');
  });
});
