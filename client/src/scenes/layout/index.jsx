import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/NavBar";
import Sidebar from "components/Sidebar";

const Layout = () => {



  return (
    <Box display= "flex" width="100%" height="100%">
      <Sidebar

      />
      <Box flexGrow={1}>
        <Navbar

        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
