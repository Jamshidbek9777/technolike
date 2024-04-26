import { useNavigate, Link } from "react-router-dom";
import { Drawer, Flex } from "antd";
import Logo from "../../assets/logo.jpg";
import { Box, Container } from "..";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { media } from "../../style/media";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineNewspaper } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuBadgeInfo } from "react-icons/lu";

const Navbar = () => {
     const [active, setActive] = useState(1);
     const navigate = useNavigate();
     const [open, setOpen] = useState(false);

     const handleChange = (path: any, index: any) => {
          navigate(path);
          active;
          setActive(index);
          onClose();
     };
     const showDrawer = () => {
          setOpen(true);
     };

     const onClose = () => {
          setOpen(false);
     };

     const menuItems = [
          {
               id: 0,
               name: "Asosiy",
               key: "/",
               icon: <RiHome6Line size={20} />,
          },
          {
               id: 1,
               name: "Yangiliklar",
               key: "/news",
               icon: <MdOutlineNewspaper size={20} />,
          },
          {
               id: 2,
               name: "Biz haqimizda",
               key: "/about",
               icon: <LuBadgeInfo size={20} />,
          },
          {
               id: 3,
               name: "You Tube",
               key: "/youtube",
               icon: <AiOutlineYoutube size={20} />,
          },
          {
               id: 4,
               name: "Bog'lanish",
               key: "/contacts",
               icon: <TiContacts size={20} />,
          },
     ];

     return (
          <Container>
               <NavbarContainer justify="space-between">
                    <Hamburger $align="center">
                         <HiOutlineBars3CenterLeft
                              fontSize={30}
                              onClick={showDrawer}
                         />
                    </Hamburger>

                    <Box $align="center" $gap="10px">
                         <img
                              style={{ width: "40px", borderRadius: "50%" }}
                              src={Logo}
                              alt="logo"
                         />
                         <h3>TECHNOLIKE</h3>
                    </Box>
                    <NavItems $align="center" $gap="25px">
                         {menuItems.map((item, idx) => (
                              <NavItem
                                   key={idx}
                                   onClick={() =>
                                        handleChange(item.key, item.id)
                                   }>
                                   {item.name}
                              </NavItem>
                         ))}
                    </NavItems>
                    {/* <NavItems $align="center" $gap="25px">
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
                    </NavItems> */}
                    <Box $align="center">
                         <CiSearch style={{ fontSize: "25px" }} />
                    </Box>
               </NavbarContainer>
               <Drawer
                    width={260}
                    title="TECHNOLIKE"
                    placement={"left"}
                    closable={false}
                    onClose={onClose}
                    open={open}
                    key={"left"}>
                    <Flex vertical gap={2}>
                         {menuItems.map((item, idx) => (
                              <Link to={item.key} key={idx}>
                                   <NavItemSidebar key={idx} onClick={onClose}>
                                        <Box>
                                             {item.icon} {item.name}
                                        </Box>
                                   </NavItemSidebar>
                              </Link>
                         ))}
                    </Flex>
               </Drawer>
          </Container>
     );
};

const NavbarContainer = styled(Flex)`
     height: 60px;
     cursor: pointer;
     padding: 10px 0;
     user-select: none;
`;

const NavItem = styled.p<any>`
     cursor: pointer;
     color: ${({ active }) => (active ? "blue" : "black")};
     font-size: 16px;
`;

const NavItemSidebar = styled.p`
     cursor: pointer;
     font-size: 17px;
     color: #383535;
     transition: 0.3s all linear;

     &:hover {
          color: blue;
     }
`;
const NavItems = styled(Box)`
     ${media.md`
     display: none;
`}
`;

const Hamburger = styled(Box)`
     display: none;

     ${media.md`
          display: flex;
`}
`;
export default Navbar;
