import { useState } from "react";
import "./App.css";

function App() {
	const [quote, setQuote] = useState("");

	const quotes = [
		"The only way to do great work is to love what you do. – Steve Jobs",
		"Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
		"Believe you can and you're halfway there. – Theodore Roosevelt",
		"It does not matter how slowly you go as long as you do not stop. – Confucius",
		"Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
		"Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
		"Opportunities don't happen. You create them. – Chris Grosser",
		"Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
		"I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
		"Do what you can with all you have, wherever you are. – Theodore Roosevelt",
	];

	const generateQuote = () => {
		const quoteIndex = Math.floor(Math.random() * quotes.length);
		setQuote(quotes[quoteIndex]);
	};

	return (
		<div>
			<button
				style={{
					cursor: "pointer",
					padding: "1em",
					borderRadius: ".5em",
					fontSize: "1.2rem",
				}}
				onClick={generateQuote}
			>
				Generate
			</button>
			<p
				style={{
					fontSize: "1.2rem",
				}}
			>
				{quote}
			</p>
		</div>
	);
}

export default App;
