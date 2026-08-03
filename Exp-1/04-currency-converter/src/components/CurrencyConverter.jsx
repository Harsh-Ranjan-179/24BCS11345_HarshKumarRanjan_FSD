import { useEffect, useState } from "react";
import "./CurrencyConverter.css";
import { countryList } from "../data/countryList";

const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("INR");
  const [message, setMessage] = useState("Loading...");

  const updateExchangeRate = async () => {
    try {
      let amtVal = Number(amount);

      if (!amtVal || amtVal < 1) {
        amtVal = 1;
        setAmount(1);
      }

      const URL = `${BASE_URL}/${fromCurr.toLowerCase()}.json`;

      const response = await fetch(URL);
      const data = await response.json();

      const rate = data[fromCurr.toLowerCase()][toCurr.toLowerCase()];

      const finalAmount = amtVal * rate;

      setMessage(
        `${amtVal} ${fromCurr} = ${finalAmount.toFixed(2)} ${toCurr}`
      );
    } catch (error) {
      console.log(error);
      setMessage("Unable to fetch exchange rate.");
    }
  };

  useEffect(() => {
    updateExchangeRate();
  }, []);

  return (
    <div className="container">
      <h2>Currency Converter</h2>

      <form>
        <div className="amount">
          <p>Enter Amount</p>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="dropdown">
          <div className="from">
            <p>From</p>

            <div className="select-container">
              <img
                src={`https://flagsapi.com/${countryList[fromCurr]}/shiny/64.png`}
                alt="From Flag"
              />

              <select
                value={fromCurr}
                onChange={(e) => setFromCurr(e.target.value)}
              >
                {Object.keys(countryList).map((currCode) => (
                  <option key={currCode} value={currCode}>
                    {currCode}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <i className="fa-solid fa-arrow-right-arrow-left"></i>

          <div className="to">
            <p>To</p>

            <div className="select-container">
              <img
                src={`https://flagsapi.com/${countryList[toCurr]}/shiny/64.png`}
                alt="To Flag"
              />

              <select
                value={toCurr}
                onChange={(e) => setToCurr(e.target.value)}
              >
                {Object.keys(countryList).map((currCode) => (
                  <option key={currCode} value={currCode}>
                    {currCode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="msg">{message}</div>

        <button
          onClick={(e) => {
            e.preventDefault();
            updateExchangeRate();
          }}
        >
          Get Exchange Rate
        </button>
      </form>
    </div>
  );
}

export default CurrencyConverter;