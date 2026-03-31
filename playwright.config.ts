import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
        channel: 'chrome',

        viewport: { width: 1366, height: 768 }, // ✅ set your size

        launchOptions: {
            args: ['--window-size=1366,768'] // ✅ match browser window
        }
    },
});