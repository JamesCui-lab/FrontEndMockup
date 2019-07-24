import { FrontendDemoPage } from './app.po';

describe('frontend-demo App', function() {
  let page: FrontendDemoPage;

  beforeEach(() => {
    page = new FrontendDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
