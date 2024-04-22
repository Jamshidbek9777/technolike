import { Container } from "../../../components";
import { Banner } from "../../components/banner/banner";
import BannerImage from "../../../assets/image.png";
import { Card, Col, Flex, Row } from "antd";
import { news } from "../../../data/news";
import styled from "styled-components";
const Home = () => {
     return (
          <Container>
               <Flex vertical gap={20}>
                    <Banner $bg={BannerImage} style={{ color: "white" }}>
                         <Flex style={{ padding: "40px" }} vertical>
                              <h1>This is information about the news</h1>
                              <p>
                                   Lorem ipsum dolor sit amet, consectetur
                                   adipisicing elit. Voluptatum explicabo sit
                                   consequatur rerum, tempore libero aspernatur
                                   praesentium! Pariatur, eum reiciendis!
                              </p>
                         </Flex>
                    </Banner>
                    <Row gutter={[24, 24]}>
                         {news.map((item, idx) => (
                              <Col key={idx} xs={24} sm={12} lg={8}>
                                   <NewsCard
                                        cover={<CardImage src={BannerImage} />}>
                                        {item.description}
                                   </NewsCard>
                              </Col>
                         ))}
                    </Row>
               </Flex>
          </Container>
     );
};
const NewsCard = styled(Card)`
     /* border: 1px solid red; */
`;
const CardImage = styled.img``;

export default Home;
