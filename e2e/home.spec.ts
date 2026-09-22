import { expect, test } from "@playwright/test";

test("loads with the right title and hero content", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Narek Danielyan/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Senior front-end engineer");
});

test("nav link scrolls to the right section", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Skills" }).click();
  await expect(page).toHaveURL(/#skills$/);
  await expect(page.getByRole("heading", { name: "Skills" })).toBeInViewport();
});

test("experience details expand and collapse with a mouse click", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Show details" }).first();
  await toggle.click();
  await expect(page.getByRole("button", { name: "Hide details" }).first()).toBeVisible();

  await page.getByRole("button", { name: "Hide details" }).first().click();
  await expect(page.getByRole("button", { name: "Show details" }).first()).toBeVisible();
});

test("experience details expand with keyboard activation (Enter)", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Show details" }).first();
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Hide details" }).first()).toBeVisible();
});

test("work with me links to a real email address", async ({ page }) => {
  await page.goto("/");
  const bookACall = page.getByRole("link", { name: "Book a call" });
  await expect(bookACall).toHaveAttribute("href", /^mailto:danielyan\.narek99@gmail\.com/);
});
