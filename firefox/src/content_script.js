// Array of Twitter account usernames to exclude from hiding
var excludedAccounts = ['StephenKing', 'KingJames', 'IJasonAlexander'];

function hideVerifiedTweets() {

    const articles = document.querySelectorAll('article'); // select all article elements
    const anchors = []; // create an empty array to store all the anchor tags

    articles.forEach((article, articleIndex) => {
      const anchorTags = article.querySelectorAll('a');
      anchorTags.forEach((anchor, anchorIndex) => {
        const anchorObject = {
          anchor: anchor,
          articleIndex: articleIndex,
          anchorIndex: anchorIndex
        };
        var remove = true;
        for(let i=0; i<excludedAccounts.length; i++){
          var tweet = String(anchor);
          if (tweet.match(excludedAccounts[i])){
            remove = false;
          }  
        }
        if (remove){
          anchors.push(anchorObject);
        }
      });
    });

    for (let i = 0; i < anchors.length; i++) {
      // Check if the article contains an 'svg' element
      const containsSVG = anchors[i]["anchor"].querySelector('svg.r-1cvl2hr') !== null;
  
      // If the article contains an 'svg' element, hide it
      if (containsSVG) {
        articles[anchors[i]["articleIndex"]].style.display = 'none';
      }
    }
  }
  
window.setInterval(hideVerifiedTweets, 500);
  