function showQuote() {
  if (!quotes.length) return;

  const q = quotes[index % quotes.length];

  // Find the username field safely
  const usernameKey = Object.keys(q).find(
    k => k.toLowerCase().includes("tiktok") && k.toLowerCase().includes("user")
  );

  let displayText = `"${q.Quote}"`;

  if (usernameKey && q[usernameKey] && q[usernameKey].trim() !== "") {
    displayText += ` - ${q[usernameKey]}`;
  }

  document.getElementById("quoteBox").innerText = displayText;
  index++;
}
