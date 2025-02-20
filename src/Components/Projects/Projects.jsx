import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import SmartSpender from "./SmartSpender";
import RealTimeChat from "./RealTimeChat";
import Portfolio from "./Portfolio";
import ECommerce from "./E-Commerce";
import ToDo from "./ToDo";
import FoodOrder from "./FoodOrder";

const Projects = () => {
    return (
        <Box sx={{mt:12}}>
            <Box display="flex" alignItems="center" justifyContent="center" width="100%" mb={2}>
                <Divider sx={{ flexGrow: 1, bgcolor: "#00ADB5", height: "2px", mx: 2}} />
                <Typography
                    variant="h4"
                    fontWeight="600"
                    textAlign="center"
                    sx={{ color: "#d3d2d2", textTransform: "capitalize", fontFamily: "Poppins, sans-serif", fontSize: 35 }}
                >
                    Projects
                </Typography>
                <Divider sx={{ flexGrow: 1, bgcolor: "#00ADB5", height: "2px", mx: 2 }} />
            </Box>
            <RealTimeChat/>
            <SmartSpender/>
            <Portfolio/>
            <ECommerce/>
            <ToDo/>
            <FoodOrder/>
        </Box>
    );
};

export default Projects;