import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/NavBar";
import Sidebar from "components/Sidebar";


const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [ isSideBarOpen, setIsSideBarOpen ] = useState(true);




  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSideBarOpen}
        setIsSidebarOpen={setIsSideBarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSideBarOpen}
          setIsSidebarOpen={setIsSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
