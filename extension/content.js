// Hides the claude.ai sidebar once per page load by clicking its "Hide sidebar" button.
// Afterwards it stays out of the way, so Ctrl+B keeps working as a manual toggle.

const HIDE_BUTTON_SELECTOR = 'button[aria-label="Hide sidebar"]';
const GIVE_UP_AFTER_MS = 10000;

let observer = null;
let giveUpTimer = null;

function stop() {
  if (observer) observer.disconnect();
  clearTimeout(giveUpTimer);
  observer = null;
}

function tryHideSidebar() {
  const button = document.querySelector(HIDE_BUTTON_SELECTOR);
  if (!button) return;
  button.click();
  stop();
}

// The page is a single-page app, so the sidebar may render after we run.
// Watch for the button until it appears, then hide the sidebar once.
observer = new MutationObserver(tryHideSidebar);
observer.observe(document.body, { childList: true, subtree: true });
giveUpTimer = setTimeout(stop, GIVE_UP_AFTER_MS);

// If the user toggles the sidebar themselves (e.g. Ctrl+B), don't fight them.
window.addEventListener("keydown", stop, { once: true, capture: true });
window.addEventListener("pointerdown", stop, { once: true, capture: true });

tryHideSidebar();
