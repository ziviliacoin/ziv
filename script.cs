async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById('wallet-address').innerText = `Connected: ${accounts[0]}`;
    } catch (err) {
      console.error(err);
      alert("Wallet connection failed.");
    }
  } else {
    alert("MetaMask not found. Please install it.");
  }
}