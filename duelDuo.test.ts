import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  await driver.sleep(1000);
  await driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});
test("The draw button displays the div", async () => {
  const choices = await driver.findElement(By.id("draw"));
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});
test('Add to duo displays the div "player-duo', async () => {
  const addDuo = await driver.findElement(By.id("player-duo"));
  const displayed = await addDuo.isDisplayed();
  expect(displayed).toBe(true);
});
