import { AngularNoobProjectPage } from './app.po';

describe('angular-noob-project App', () => {
  let page: AngularNoobProjectPage;

  beforeEach(() => {
    page = new AngularNoobProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
