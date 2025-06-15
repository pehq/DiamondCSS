# RBLX Diamond Group Icon
![](media/Image1.png)

A Chrome extension that replaces Roblox group icons and profile avatars with a diamond shape instead of the default rounded corners.

## What it does
- Converts profile avatars from rounded to diamond shape
- Applies diamond styling to group thumbnails and icons
- Automatically handles Roblox's dynamic class reapplication
- Excludes avatar headshots and asset thumbnails to maintain proper display

## Features
- **Smart targeting**: Only affects group icons and profile avatars
- **Dynamic monitoring**: Uses MutationObserver to prevent Roblox from reverting changes
- **Selective filtering**: Ignores avatar-card-images, AvatarHeadshot, and Asset thumbnail types
- **Performance optimized**: Efficient DOM watching without excessive resource usage

## Installation
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension folder

## Technical Details
The extension works by:
1. Removing Roblox's `radius-medium` class from profile avatars
2. Adding custom `RBLXDiamondCSS` class to target elements
3. Monitoring DOM changes to prevent Roblox from reapplying rounded styles
4. Filtering out specific thumbnail types that should remain unchanged

## Compatibility
- Works on `https://www.roblox.com/communities/*` and `https://www.roblox.com/groups/*`
- Compatible with Roblox's dynamic content loading
- Handles both initial page load and navigation changes
