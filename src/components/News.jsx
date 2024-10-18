
import React from 'react';
import { Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../Services/cryptoNewsApi';

import Loader from './Loader';
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;

export default function News({ simplified }) {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: "cryptocurrency", count: simplified ? 6 : 20 });

  if (!cryptoNews?.data) return <Loader/>;

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.data.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card
            hoverable
            className="news-card"
            cover={<img style={{ height: "240px" }}src={news?.thumbnail || demoImage} alt="news" />}
          >
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={5}>{news.title}</Title>
              </div>
              <p className="news-content">{news.excerpt}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news?.publisher?.favicon || demoImage} alt="" />
                  <Text className="provider-name">{news?.publisher?.name}</Text>
                </div>
                <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );}