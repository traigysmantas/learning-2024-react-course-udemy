// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const convert = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
        { signal: controller.signal }
      );

      const result = await res.json();

      console.log({ result });

      setConvertedAmount(result.rates[`${toCurrency}`]);
      setIsLoading(false);
    };

    console.log({ amount, fromCurrency, toCurrency });

    if (!amount || fromCurrency === toCurrency) {
      return;
    }

    convert();

    return () => controller.abort();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <input
        type="number"
        disabled={isLoading}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
        value={fromCurrency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        disabled={isLoading}
        onChange={(e) => setToCurrency(e.target.value)}
        value={toCurrency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {convertedAmount} {toCurrency}
      </p>
    </div>
  );
}
