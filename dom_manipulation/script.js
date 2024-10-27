const quotes = [
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" },
    { text: "Do one thing every day that scares you.", category: "Inspiration" }
  ];
  
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quoteDisplay").innerText = `"${quote.text}" - ${quote.category}`;
  }
  
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  
  function addQuote() {
    const quoteText = document.getElementById("newQuoteText").value;
    const quoteCategory = document.getElementById("newQuoteCategory").value;
  
    if (quoteText && quoteCategory) {
      quotes.push({ text: quoteText, category: quoteCategory });
      
     
      document.getElementById("newQuoteText").value = '';
      document.getElementById("newQuoteCategory").value = '';
      
      document.getElementById("quoteDisplay").innerText = `Added new quote: "${quoteText}" - ${quoteCategory}`;
    } else {
      alert("Please enter both quote text and category.");
    }
  }
  
