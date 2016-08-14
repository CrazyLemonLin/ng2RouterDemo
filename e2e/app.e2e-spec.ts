import { Ng2RouterDemoPage } from './app.po';

describe('ng2-router-demo App', function() {
  let page: Ng2RouterDemoPage;

  beforeEach(() => {
    page = new Ng2RouterDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
