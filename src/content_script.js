// Array of Twitter account usernames to exclude from hiding
const excludedAccounts = ['username1', 'username2'];

function hideVerifiedTweets() {
  const verifiedAccounts = document.querySelectorAll('.css-1dbjc4n.r-18u37iz.r-1wbh5a2 .css-901oao.r-1fmj7o5.r-6koalj.r-1qd0xha.r-a023e6.r-b88u0q.r-16dba41.r-1h0z5md.r-ad9z0x.r-bcqeeo .css-18t94o4:not([hidden]) .css-901oao .css-16my406');
  
  for (let account of verifiedAccounts) {
    const username = account.innerText.trim();
    if (excludedAccounts.includes(username)) {
      continue; // Skip excluded accounts
    }
    
    const tweet = account.closest('.css-1dbjc4n.r-18u37iz.r-1wbh5a2 .css-1dbjc4n.r-18u37iz.r-1wbh5a2 .css-1dbjc4n.r-18u37iz.r-1wbh5a2');
    tweet.style.display = 'none';
  }
}

window.setInterval(hideVerifiedTweets, 500);

