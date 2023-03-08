// homepage.js
const { expect } = require('@playwright/test');

exports.Homepage = class Homepage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.navbar = page.locator("nav[id='main-navbar']");
    this.navbarBrand = page.locator("nav[id='main-navbar']");

    this.elements = {
        navbar :  page.locator("nav[id='navbar']"),
        navbarBrand : page.locator("span[id='navbarBrand']"),
        navbarLinkHome : page.locator("a[id='navbarLinkHome']"),
        navbarLinkAuthors : page.locator("a[id='navbarLinkAuthors']"),
        navbarLinkBooks : page.locator("a[id='navbarLinkBooks']"),
        jumbotron : page.locator("div[id='jumbotron']"),
        textJumbotronHeading : page.locator("h1[id='textJumbotronHeading']"),
        textJumbotronSubHeading : page.locator("h3[id='textJumbotronSubHeading']"),
        imgBackground : page.locator(""),
        content : page.locator("div[id='content']"),
        linkBrowseByAuthor : page.locator("a[id='browseAuthors']"),
        linkBrowseByBook : page.locator("a[id='browseBooks']"),
        linkGithub : page.locator("a[id='github']"),
        linkKanbanBoard : page.locator("a[id='kanban']"),
        footer : page.locator("div[id='footer']"),
        linkPhotoCredit : page.locator("a[id='photoCredit']"),
    }

  }

  async goto() {
    await this.page.goto('http://demo.billclaytor.com');
  }

  async verifyPageElements() {
    await this.verifyNavbarElements();
    await this.verifyJumbotronElements();
    await this.verifyContentElements();
    await this.verifyFooterElements();
  }

  async verifyNavbarElements() {
    await expect(this.elements.navbar).toBeVisible();
    await expect(this.elements.navbarBrand).toBeVisible();
    await expect(this.elements.navbarLinkHome).toBeVisible();
    await expect(this.elements.navbarLinkAuthors).toBeVisible();
    await expect(this.elements.navbarLinkBooks).toBeVisible();
  }

  async verifyJumbotronElements() {
    await expect(this.elements.jumbotron).toBeVisible();
    await expect(this.elements.textJumbotronHeading).toBeVisible();
    await expect(this.elements.textJumbotronHeading).toHaveText('Developer Bookshelf');

    await expect(this.elements.textJumbotronSubHeading).toBeVisible();
    await expect(this.elements.textJumbotronSubHeading).toHaveText('A Ruby on Rails demo');

    // await expect(this.elements.imgBackground).toBeVisible();
  }

  async verifyContentElements() {
    await expect(this.elements.content).toBeVisible();
    await expect(this.elements.linkBrowseByAuthor).toBeVisible();
    await expect(this.elements.linkBrowseByAuthor).toHaveText('author name');
    await expect(this.elements.linkBrowseByBook).toBeVisible();
    await expect(this.elements.linkBrowseByBook).toHaveText('book title');
    await expect(this.elements.linkGithub).toBeVisible();
    await expect(this.elements.linkGithub).toHaveText('Github');
    await expect(this.elements.linkKanbanBoard).toBeVisible();
    await expect(this.elements.linkKanbanBoard).toHaveText('Kanban board');
  }

  async verifyFooterElements() {
    await expect(this.elements.footer).toBeVisible();
    await expect(this.elements.linkPhotoCredit).toBeVisible();
    await expect(this.elements.linkPhotoCredit).toHaveText('Photo by Engin Akyurt');
  }


}
