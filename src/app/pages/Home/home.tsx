import { Container } from "../../../components";
import { Banner } from "../../components/banner/banner";
import BannerImage from "../../../assets/image.png";
import NewsImage from "../../../assets/newsimage.jpeg";
import { Card, Col, Flex, Row } from "antd";
import { news } from "../../../data/news";
import styled, { css } from "styled-components";
import { media } from "../../../style/media";

const Home = () => {
     return (
          <Container>
               <Flex vertical gap={20}>
                    <Banner $bg={BannerImage} style={{ color: "white" }}>
                         <BannerText vertical>
                              <Text $context="title">
                                   This is information about the news
                              </Text>
                              <Text>
                                   Lorem ipsum dolor sit amet, consectetur
                                   adipisicing elit. Voluptatum explicabo sit
                                   consequatur rerum, tempore libero aspernatur
                                   praesentium! Pariatur, eum reiciendis!
                              </Text>
                         </BannerText>
                    </Banner>
                    <Row gutter={[24, 24]}>
                         {news.map((item, idx) => (
                              <Col key={idx} xs={24} sm={12} lg={8}>
                                   <NewsCard
                                        hoverable
                                        cover={<CardImage src={NewsImage} />}>
                                        {item.description}
                                   </NewsCard>
                              </Col>
                         ))}
                    </Row>
               </Flex>
          </Container>
     );
};
export default Home;

const NewsCard = styled(Card)`
     /* border: 1px solid red; */
`;
const CardImage = styled.img``;

const Text = styled.p<any>`
     margin: 0;
     ${(props) =>
          props.$context === "title" &&
          css`
               font-size: 24px;
               font-weight: 700;

               ${media.md`
                 font-size: 18px;
               `}
          `}
`;

const BannerText = styled(Flex)`
     padding: 60px;

     ${media.md`
       padding: 20px;
  `}
`;
