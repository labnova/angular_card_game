import { JsBlackjackPage } from './app.po';

describe('js-blackjack App', () => {
  let page: JsBlackjackPage;

  beforeEach(() => {
    page = new JsBlackjackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
