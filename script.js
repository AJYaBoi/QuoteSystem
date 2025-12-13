// YOUR actual OpenSheet URL
const sheetURL =
  "https://opensheet.elk.sh/1uEv7XxCZSaWlbBMiE0kKRyZrOnXh4pPy3gvi-oAnwnY/Form%20Responses%201";

let quotes = [];
let index = 0;

async function fetchQuotes() {
  try {
    const res = await fetch(sheetURL);
    if (!res.ok) throw new Error("Network response not OK");

    quotes = await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    quotes = [];
  }
}

function showQuote() {
  if (!quotes.length) {
    document.getElementById("quoteBox").innerText = "";
    return;
  }

  const q = quotes[index % quotes.length];
  let text = `"${q.Quote}"`;

  // Add username
  if (q["TikTok Username"] && q["TikTok Username"].trim() !== "") {
    text += ` - ${q["TikTok Username"]}`;
  }

  document.getElementById("quoteBox").innerText = text;
  index++;
}

// first fetch
fetchQuotes();

// Refresh the fetched sheet data & update quotes
setInterval(fetchQuotes, 5000);

// Rotate what's shown every 7 seconds
setInterval(showQuote, 7000);
