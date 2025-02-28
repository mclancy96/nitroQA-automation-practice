import { test as base, BrowserContext } from "@playwright/test";
import fs from "fs";
import path from "path";

const SESSION_FILE = path.resolve(__dirname, "../setup/session.json");

// Extend the base test with a custom fixture
export const test = base.extend<{
  context: BrowserContext;
}>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    // Load session cookie if it exists
    if (fs.existsSync(SESSION_FILE)) {
      const session = JSON.parse(fs.readFileSync(SESSION_FILE, "utf-8"));
      await context.addCookies(session);
      console.log("Session cookie loaded into the browser context.");
    } else {
      console.warn("No session cookie found. Ensure global setup is run.");
    }

    await use(context);
    await context.close();
  },
});

export const expect = test.expect;
