// example.spec.js
const { test, expect } = require('@playwright/test');
const { Homepage } = require('../../pages/homepage.js');

test('homepage should be displayed', async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.goto();
  await homepage.verifyPageElements();
});
