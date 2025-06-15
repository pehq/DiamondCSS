function replaceAvatarClass() {
  const span = document.querySelector('.profile-header-details-avatar.radius-medium');
  if (span) {
    span.classList.remove('radius-medium');
    span.classList.add('RBLXDiamondCSS');
  }
  return false;
}

//SPAM THE THING SINCE ROBLOX IS LIKE "nuh uh, I'll reapply my own class"
let retries = 0;
const interval = setInterval(() => {
  if (replaceAvatarClass() || retries > 30) {
    clearInterval(interval); // Stop trying after ~3 seconds
  }
  retries++;
}, 100); 