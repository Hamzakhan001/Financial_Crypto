import React,{useState} from "react";
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card,Row,Col,Input} from 'antd'

import { useGetCryptoQuery} from '../services/cryptoApp'


function CryptoCurrencies() {
  const {data: cryptosList, isFetching} = useGetCryptoQuery
  const [crypto,setCrypto]=useState(cryptosList?.data?.coins)


  return <div>CryptoCurrencies</div>;
} 

export default CryptoCurrencies;
