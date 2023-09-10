import puppeteer from "puppeteer";

export const returnHeadingText = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();
  await page.goto("https://www.tomvorel.com/");

  const heading = await page.$("h1");
  const headingText = await page.evaluate((el) => el?.textContent, heading);
  await browser.close();

  return headingText;
};
