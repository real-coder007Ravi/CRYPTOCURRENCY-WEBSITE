let bti = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let dog = document.getElementById("dogecoin");

const url =
	"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

async function getCoins() {
	try {
		const response = await fetch(url);
		const data = await response.json();

		// Check if the expected properties exist before accessing them
		if (data && data.bitcoin && data.bitcoin.usd != undefined) {
			bti.innerHTML = data.bitcoin.usd;
		} else {
			console.error("Error: Unable to get Bitcoin data.");
		}

		if (data && data.ethereum && data.ethereum.usd != undefined) {
			eth.innerHTML = data.ethereum.usd;
		} else {
			console.error("Error: Unable to get Ethereum data.");
		}

		if (data && data.dogecoin && data.dogecoin.usd != undefined) {
			dog.innerHTML = data.dogecoin.usd;
		} else {
			console.error("Error: Unable to get Dogecoin data.");
		}
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

// Call the function to fetch and display the data
getCoins();
