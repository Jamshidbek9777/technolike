import styled from "styled-components";
import { Container } from "../container";
import { Flex } from "antd";
import { Box } from "../box";

const Footer = () => {
     return (
          <FooterContainer>
               <Container>
                    <Flex>
                         <Box>
                              <h1>Technolike</h1>
                              <p>
                                   O'zbekistondagi eng katta tech auditoriyani
                                   birga quramiz
                              </p>
                              link link
                         </Box>

                         <Box>
                              <h1>About us</h1>
                         </Box>
                    </Flex>
               </Container>
          </FooterContainer>
     );
};

const FooterContainer = styled.div`
     height: 400px;
     background-color: aliceblue;
     margin-top: 50px;
`;
export default Footer;
