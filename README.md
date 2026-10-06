# AutoHideClaudeSideBar
A Chrome extension that hides the claude.ai sidebar automatically when the page loads.

## Install
1. Open `chrome://extensions`
2. Turn on **Developer mode** (top right)
3. Click **Load unpacked** and select the `extension` folder
4. Reload claude.ai

## How it works
`extension/content.js` waits for the sidebar's "Hide sidebar" button and clicks it once.
It stops watching after 10 seconds, or as soon as you press a key or click, so `Ctrl+B` keeps working as a manual toggle.

If claude.ai changes the button's `aria-label`, update `HIDE_BUTTON_SELECTOR` in `content.js`.
