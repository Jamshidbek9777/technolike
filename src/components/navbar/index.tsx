import { useNavigate, useLocation } from "react-router-dom";
import { Flex } from "antd";
import Logo from "../../assets/logo.jpg";
import { Box, Container } from "..";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
     const [active, setActive] = useState(1);
     const navigate = useNavigate();
     const location = useLocation();

     const handleChange = (path: any, index: any) => {
          navigate(path);
          setActive(index);
     };

     return (
          <Container>
               <NavbarContainer justify="space-between">
                    <Box $align="center" $gap="10px">
                         <img
                              style={{ width: "40px", borderRadius: "50%" }}
                              src={Logo}
                              alt="logo"
                         />
                         Technolike
                    </Box>
                    <Box $align="center" $gap="25px">
                         <NavItem
                              onClick={() => handleChange("/", 1)}
                              active={location.pathname === "/"}>
                              Asosiy
                         </NavItem>
                         <NavItem
                              onClick={() => handleChange("/news", 2)}
                              active={location.pathname === "/news"}>
                              Yangliliklar
                         </NavItem>
                         <NavItem
                              onClick={() => handleChange("/about", 3)}
                              active={location.pathname === "/about"}>
                              Biz haqimizda
                         </NavItem>
                         <NavItem
                              onClick={() => handleChange("/youtube", 4)}
                              active={location.pathname === "/youtube"}>
                              You Tube
                         </NavItem>
                         <NavItem
                              onClick={() => handleChange("/contact", 5)}
                              active={location.pathname === "/contact"}>
                              Bog'lanish
                         </NavItem>
                    </Box>
                    <Box $align="center">
                         <CiSearch style={{ fontSize: "25px" }} />
                    </Box>
               </NavbarContainer>
          </Container>
     );
};

const NavbarContainer = styled(Flex)`
     height: 60px;
     cursor: pointer;
     padding: 10px 0;
`;

const NavItem = styled.div<any>`
     cursor: pointer;
     color: ${({ active }) => (active ? "blue" : "black")};
     /* text-decoration: ${({ active }) => (active ? "underline" : "none")}; */
`;

export default Navbar;
