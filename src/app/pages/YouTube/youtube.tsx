import { Card, Col, Flex, Row } from "antd";
import { Container } from "../../../components";
import styled from "styled-components";
import VideoImage from "../../../assets/Screenshot from 2024-04-29 12-11-05.png";
import { media } from "../../../style/media";
const videos = [
     {
          id: 1,
          src: "https://youtu.be/XSfDpF-rcJw?si=HPVVgM3Dnm7pPwYk",
          description: "This is you tube video about meta quest",
     },
     {
          id: 2,
          src: "https://youtu.be/XSfDpF-rcJw?si=HPVVgM3Dnm7pPwYk",
          description: "This is you tube video about meta quest",
     },
     {
          id: 3,
          src: "https://youtu.be/XSfDpF-rcJw?si=HPVVgM3Dnm7pPwYk",
          description: "This is you tube video about meta quest",
     },
     {
          id: 4,
          src: "https://youtu.be/XSfDpF-rcJw?si=HPVVgM3Dnm7pPwYk",
          description: "This is you tube video about meta quest",
     },
     {
          id: 5,
          src: "https://youtu.be/XSfDpF-rcJw?si=HPVVgM3Dnm7pPwYk",
          description: "This is you tube video about meta quest",
     },
     {
          id: 6,
          src: "https://youtu.be/XSfDpF-rcJw?si=HPVVgM3Dnm7pPwYk",
          description: "This is you tube video about meta quest",
     },
     {
          id: 7,
          src: "https://youtu.be/XSfDpF-rcJw?si=HPVVgM3Dnm7pPwYk",
          description: "This is you tube video about meta quest",
     },
     {
          id: 8,
          src: "https://youtu.be/XSfDpF-rcJw?si=HPVVgM3Dnm7pPwYk",
          description: "This is you tube video about meta quest",
     },
     {
          id: 9,
          src: "https://youtu.be/XSfDpF-rcJw?si=HPVVgM3Dnm7pPwYk",
          description: "This is you tube video about meta quest",
     },
];
const YouTube = () => {
     return (
          <Container>
               <Flex vertical justify="center" align="center">
                    <Title>You Tube sahifamizdan videolar</Title>
                    <Row gutter={[24, 24]}>
                         {videos.map((item, idx) => (
                              <Col key={idx} xs={24} sm={12} lg={8}>
                                   <a href={item.src}>
                                        <VideoCard
                                             hoverable
                                             cover={
                                                  <CardImage src={VideoImage} />
                                             }>
                                             {item.description}
                                        </VideoCard>
                                   </a>
                              </Col>
                         ))}
                    </Row>
               </Flex>
          </Container>
     );
};

export default YouTube;

const VideoCard = styled(Card)``;
const CardImage = styled.img``;

const Title = styled.h1`
     ${media.lg`
          font-size: 25px;
     `}
     ${media.md`
          font-size: 20px;
     `}
`;
