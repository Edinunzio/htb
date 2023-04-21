// TODO: Array of Twitter account usernames to exclude from hiding
var excludedAccounts = ['StephenKing', 'username2'];

function hideVerifiedTweets() {
  
    // Get all 'article' elements in the document
    //var articles = document.getElementsByTagName("article");

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
        var blah = String(anchor);
        if (!blah.match("StephenKing")){
          anchors.push(anchorObject);
        }
        
      });
    });

    //console.log(anchors)
    for (let i=0; i < anchors.length; i++){
      if (anchors[i]["anchor"]["href"].includes("StephenKing")){
      }
      //console.log(anchors[i]["anchor"]["href"]);
    }


    //var user_links = document.getElementsByTagName('article a');
    //console.log(user_links);
    //var articles = [];
    /* for (let i = 0; i < excludedAccounts.length; i++) {
      for (let i = 0; i < user_links.length; i++) {
        console.log(user_links[i]);

        //console.log(excludedAccounts[i]);
        if (user_links[i].toString().includes(`/${excludedAccounts[i]}`)) {
          console.log(excludedAccounts[i] + 'found');
        } else {
          console.log(excludedAccounts[i] + 'not found');
          articles.push(_articles[i]);
        }
      }
    } */
  

  
    // Loop through each 'article' element
    // for (let i = 0; i < articles.length; i++) {
    //   /*for (let excludedAccount of excludedAccounts) {
    //     if (articles[i].includes(excludedAccount)) {
    //       articles.pop(i); // Skip included accounts
    //     }
    //   }*/
    //   // Check if the article contains an 'svg' element
    //   const containsSVG = articles[i].querySelector('svg.r-1cvl2hr') !== null;
  
    //   // If the article contains an 'svg' element, hide it
    //   if (containsSVG) {
    //     articles[i].style.display = 'none';
    //   }
    // }

    for (let i = 0; i < anchors.length; i++) {
      /*for (let excludedAccount of excludedAccounts) {
        if (articles[i].includes(excludedAccount)) {
          articles.pop(i); // Skip included accounts
        }
      }*/
      console.log(anchors);
      // Check if the article contains an 'svg' element
      const containsSVG = anchors[i]["anchor"].querySelector('svg.r-1cvl2hr') !== null;
  
      // If the article contains an 'svg' element, hide it
      if (containsSVG) {
        articles[anchors[i]["articleIndex"]].style.display = 'none';
      }
    }




  }
  
window.setInterval(hideVerifiedTweets, 5000);
  