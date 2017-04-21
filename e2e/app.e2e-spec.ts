import { KumaranFirstAppPage } from './app.po';

describe('kumaran-first-app App', function() {
  let page: KumaranFirstAppPage;

  beforeEach(() => {
    page = new KumaranFirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
