import React, { useState} from "react";
import {
    Box, 
    Card, 
    ardActions, 
    CardContent, 
    Collapse, 
    Button,
    Typography,
    Rating,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";

const Products = () => {

    const { data, isLoading} = useGetProductsQuery();
    console.log("Products Data", data)

    return <Box>
        <Header title="PRODUCTS" subtitle="See all your list of products." />
    </Box>
}

export default Products;