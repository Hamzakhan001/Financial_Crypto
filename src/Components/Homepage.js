import React from 'react'
import millify from 'millify'
import {Layout,Row,Col, Typography, Statistic} from "antd";
import {Link} from 'react-router-dom'
import CryptoCurrencies from './CryptoCurrencies'

import { useGetCryptoQuery } from '../services/cryptoApp';
const {Title}=Typography

function Homepage() { 
    const {data,isFetching}=useGetCryptoQuery();
    const globalstats=data?.data?.stats;
    console.log(data)

    if(isFetching) return 'Loaing ..'

    return (
      <div>
        <Title level={2} className="heading"></Title>
        <Row>
          <Col span={12}>
            <Statistic title="Total Cryptocurrencies" value={globalstats} />
          </Col>
          <Col span={12}>
            <Statistic title="Total Exchanges" value={millify(globalstats.totalexchanges)} />
          </Col>
          <Col span={12}>
            <Statistic title="Total MarketCap" value={millify(globalstats.totalMarketCap)} />
          </Col>
          <Col span={12}>
            <Statistic title="Total 24h volume" value={millify(globalstats.total24hVolume)} />
          </Col>
          <Col span={12}>
            <Statistic title="Total Markets" value={millify(globalstats.totalMarkets)} />
          </Col>
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 CryptoCurrencies in world</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies "></Link></Title>
        </div>
        <CryptoCurrencies simplified />
                <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 CryptoCurrencies in world</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies "></Link></Title>
        </div>
      </div>
    );
}

export default Homepage
