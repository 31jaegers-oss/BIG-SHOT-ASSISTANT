# BIG SHOT ASSISTANT

A Spamton-inspired assistant website for GitHub Pages. It includes a chat interface, image upload, and Ctrl+V screenshot pasting.

## Publish with GitHub Pages

1. Open this repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose branch **main** and folder **/(root)**, then click **Save**.
5. Wait for GitHub Pages to publish. The expected site address is:

   https://31jaegers-oss.github.io/BIG-SHOT-ASSISTANT/

This is a hosted website, not a downloaded local HTML file.

## What works now

- Chat-style message display
- Attach an image with the + button
- Paste a screenshot with Ctrl+V
- Mobile-friendly layout

## Important: AI is not connected yet

The current page is an interface demo. It does **not** send messages to ChatGPT or another AI model yet.

To make it answer for real, it needs a small secure backend (for example, a Cloudflare Worker) that calls an AI API. Store the API key as a backend secret. **Never put an API key in app.js, index.html, or any public GitHub file.**

A ChatGPT subscription does not automatically include API usage. An API provider may charge separately. A normal website also cannot float over every other Chromebook app or secretly watch your screen. You can share screenshots with it manually.
