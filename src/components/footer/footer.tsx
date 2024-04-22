import styled, { css } from "styled-components";
import { Container } from "../container";
import { Flex } from "antd";
import { Box } from "../box";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { media } from "../../style/media";
import { pxToRem } from "../../lib/general";

const Footer = () => {
     return (
          <Container>
               <FooterContainer>
                    <FooterFlex justify="space-between" gap={20}>
                         <Box>
                              <Text $context="title">Technolike</Text>
                              <p>
                                   O'zbekistondagi eng katta tech auditoriyani
                                   birga quramiz
                              </p>
                              <p>Asoschi: @Nizomiddin_Bahtiyorov</p>
                              <p>Dasturchi: @Jamshidbek_Rasulov</p>
                         </Box>

                         <Box>
                              <Text $context="title">
                                   Bizning ijtimoiy tarmoqlar:
                              </Text>
                              <Socials $justify="space-between">
                                   <Box $align="center" $gap="10px">
                                        <FaTelegramPlane
                                             style={{ fontSize: "20px" }}
                                        />{" "}
                                        <p>Telegram</p>
                                   </Box>
                                   <Box $align="center" $gap="10px">
                                        <FaInstagram
                                             style={{ fontSize: "20px" }}
                                        />{" "}
                                        <p>Instagram</p>
                                   </Box>
                                   <Box $align="center" $gap="10px">
                                        <FaYoutube
                                             style={{ fontSize: "20px" }}
                                        />{" "}
                                        <p>You Tube</p>
                                   </Box>
                              </Socials>
                         </Box>
                    </FooterFlex>
               </FooterContainer>
          </Container>
     );
};

const FooterContainer = styled.div`
     height: fit-content;
     background-color: #e9e8e8;
     margin: 100px 0 20px 0;
     padding: 20px;
     border-radius: 10px;

     ${media.md`
       padding:10px;
     `}
`;

const FooterFlex = styled(Flex)`
     ${media.sm`
       flex-direction: column;
     `}
`;

const Text = styled.p<any>`
     ${(props) =>
          props.$context === "title" &&
          css`
               font-size: ${pxToRem(30)};
               font-weight: normal;

               ${media.md`
                  font-size: ${pxToRem(20)};
               `}
          `}
`;

const Socials = styled(Box)`
     ${media.md`
        display:flex;
        flex-direction: column;
      `}
`;
export default Footer;
