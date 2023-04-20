// TODO: Array of Twitter account usernames to exclude from hiding
// const excludedAccounts = ['username1', 'username2'];

function hideVerifiedTweets() {
  
    // Get all 'article' elements in the document
    var articles = document.getElementsByTagName("article");
  
    // Loop through each 'article' element
    for (let i = 0; i < articles.length; i++) {
      // Check if the article contains an 'svg' element
      const containsSVG = articles[i].querySelector('svg.r-1cvl2hr') !== null;
  
      // If the article contains an 'svg' element, hide it
      if (containsSVG) {
        articles[i].style.display = 'none';
      }
    }
  }
  
window.setInterval(hideVerifiedTweets, 500);
  