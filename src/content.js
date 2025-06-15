function replaceAvatarClass() {
  let found = false;
  
  // Handle profile avatar
  const avatarElement = document.querySelector('.profile-header-details-avatar.radius-medium');
  if (avatarElement) {
    avatarElement.classList.remove('radius-medium');
    avatarElement.classList.add('RBLXDiamondCSS');
    found = true;
  }
  
  // Handle thumbnail containers (but not avatar-card-image or AvatarHeadshot or Asset)
  const thumbnails = document.querySelectorAll('.thumbnail-2d-container:not(.avatar-card-image):not(.user-card-avatar):not(.group-event-thumbnail-container)');
  thumbnails.forEach(thumb => {
    // Check if it has thumbnail-type of AvatarHeadshot or Asset
    const thumbnailType = thumb.getAttribute('thumbnail-type');
    if (thumbnailType === 'AvatarHeadshot' || thumbnailType === 'Asset') {
      return; // Skip this one
    }
    
    if (!thumb.classList.contains('RBLXDiamondCSS')) {
      thumb.classList.add('RBLXDiamondCSS');
      found = true;
    }
  });
  
  return found;
}

// Use MutationObserver to watch for class changes - easiest way to stop Roblox
const targetElement = document.querySelector('.profile-header-details-avatar');
if (targetElement) {
  const observer = new MutationObserver(() => {
    replaceAvatarClass();
  });
  
  observer.observe(targetElement, {
    attributes: true,
    attributeFilter: ['class']
  });
} else {
  console.warn('Profile avatar element not found');
}

// Also watch for new thumbnail containers being added
const bodyObserver = new MutationObserver((mutations) => {
  // Only run if new nodes were added to avoid excessive calls
  const hasNewNodes = mutations.some(mutation => mutation.addedNodes.length > 0);
  if (hasNewNodes) {
    replaceAvatarClass();
  }
});

bodyObserver.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial replacement
replaceAvatarClass();
