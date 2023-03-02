// homepage.js
const { expect } = require('@playwright/test');

exports.Homepage = class Homepage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.navbar = page.locator("//nav[@id='main-navbar']");
    this.navbarBrand = page.locator("//nav[@id='main-navbar']");

    this.elements = {
        navbar :  page.locator("//nav[@id='main-navbar']"),
        navbarBrand : page.locator("//span[@class='navbar-brand'][text()='Developer Bookshelf']"),
        navbarLinkHome : page.locator("//a[@class='nav-link'][text()='Home']"),
        navbarLinkAuthors : page.locator("//a[@class='nav-link'][text()='Authors']"),
        navbarLinkBooks : page.locator("//a[@class='nav-link'][text()='Books']"),
        header : page.locator("//div[@id='header']"),
        textHeading : page.locator("//h1[text()='Developer Bookshelf']"),
        textSubHeading : page.locator("//h3[text()='A Ruby on Rails demo']"),
        imgBackground : page.locator(""),
        content : page.locator("//div[@id='content']"),
        linkBrowseByAuthor : page.locator("//a[text()='author name']"),
        linkBrowseByBook : page.locator("//a[text()='book title']"),
        linkGithub : page.locator("//a[text()='Github']"),
        linkKanbanBoard : page.locator("//a[text()='Kanban board']"),
        footer : page.locator("//div[@id='footer']"),
        linkPhotoCredit : page.locator("//a[text()='Photo by Engin Akyurt']"),
    }

  }

  async goto() {
    await this.page.goto('http://demo.billclaytor.com');
  }

  async verifyPageElements() {
    await this.verifyNavbarElements();
    await this.verifyHeaderElements();
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

  async verifyHeaderElements() {
    await expect(this.elements.header).toBeVisible();
    await expect(this.elements.textHeading).toBeVisible();
    await expect(this.elements.textSubHeading).toBeVisible();
    // await expect(this.elements.imgBackground).toBeVisible();
  }

  async verifyContentElements() {
    await expect(this.elements.content).toBeVisible();
    await expect(this.elements.linkBrowseByAuthor).toBeVisible();
    await expect(this.elements.linkBrowseByBook).toBeVisible();
    await expect(this.elements.linkGithub).toBeVisible();
    await expect(this.elements.linkKanbanBoard).toBeVisible();
  }

  async verifyFooterElements() {
    await expect(this.elements.footer).toBeVisible();
    await expect(this.elements.linkPhotoCredit).toBeVisible();
  }


}
