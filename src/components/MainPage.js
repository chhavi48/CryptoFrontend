import React, { useEffect, useState } from "react";
import Converter from "./Converter";
import axios from "axios";
import Header from "./Header";

const MainPage = () => {
  const [currencyList, setCurrencyList] = useState([]);

  const getCurrencyList = async () => {
    try {
      const response = await axios.get(
        `https://backend-wlmb.vercel.app/api/cryptocurrencies`
      );
      setCurrencyList(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrencyList();
  }, []);

  return (
    <>
      <Header />
      <Converter currencyList={currencyList} />
    </>
  );
};

export default MainPage;
