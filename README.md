This is a simple web extension for Firefox browsers that hides tweets from verified accounts on Twitter.

If there are verified users that you don't wish to hide, you can manually enter their handle in the [`excludedAccounts`](https://github.com/Edinunzio/htb/blob/main/content_script.js#L2) variable.

### Instructions

All you really need from this repo are the contents of the `src` directory. As long as you save those 2 files together (`content_script.js` and `manifest.json`), this should work as expected. 

Load this extension into Firefox by navigating to about:debugging in the address bar, clicking "This Firefox" on the left-hand side, clicking "Load Temporary Add-on", and selecting the  `manifest.json` file. 
