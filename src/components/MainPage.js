import React, { useEffect, useState } from "react";
import Converter from "./Converter";
import axios from "axios";
import Header from "./Header";

const MainPage = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const [targetedCurrencyList, setTargetCurrencyList] = useState([]);

  const getCurrencyList = async () => {
    // try {
    //   const response = await axios.get(
    //     "http://localhost:8080/api/cryptocurrencies"
    //   );
    //   setCurrencyList(response?.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    getCurrencyList();
  }, []);

  return (
    <div>
      <Header />
      <Converter currencyList={currencyList} />
    </div>
  );
};

export default MainPage;