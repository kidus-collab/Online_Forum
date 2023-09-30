import React from "react";

import { Box } from "@chakra-ui/react";

// constants
import { color } from "../utils/constants";

// components
const SideBar = React.lazy(() => import("../Components/Nav/SideBar"));
const RightMenu = React.lazy(() => import("../Components/RightMenu/RightMenu"));
const Main = React.lazy(() => import("../Components/Main/Main "));
const NavBar = React.lazy(() => import("../Components/Nav/NavBar"));

const Home = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient={color[0]}
      gap={{ md: 2 }}
      justifyContent={{ base: "normal", md: "space-between" }}
      display={{ md: "flex" }}
    >
      {/* layout */}
      <SideBar />
      <NavBar />
      <Main />
      <RightMenu />
    </Box>
  );
};

export default Home;
