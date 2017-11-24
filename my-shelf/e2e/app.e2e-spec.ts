import { MyShelfPage } from './app.po';

describe('my-shelf App', () => {
  let page: MyShelfPage;

  beforeEach(() => {
    page = new MyShelfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
