function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    const conversionRates = {
        USD: 1,
        EUR: 0.916,
        GBP: 0.797,
        INR: 83.365,
        JPY: 149.255,
        CAD: 1.370,
        CNY: 7.151,
        RUB: 88.747,
        BRL: 4.904,
        AUD: 1.522,
        KD: 0.308
    };

    const exchangeRate = conversionRates[toCurrency] / conversionRates[fromCurrency];
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `${amount} ${fromCurrency} = <strong>${convertedAmount} ${toCurrency}</strong>`;
}