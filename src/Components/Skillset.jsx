import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import "@fontsource/poppins"; // Import Poppins font

const Skillset = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" my={4}>
            <Divider sx={{ width: "40%", bgcolor: "#00ADB5", height: "0.5px" }} />
            <Typography
                variant="h4"
                fontWeight="600"
                sx={{mx: 2, color: "#d3d2d2", textTransform: "capitalize", fontFamily: "Poppins, sans-serif", ml:6, mr:6, fontSize:35}}>
                Skillset
            </Typography>

            <Divider sx={{ width: "40%", bgcolor: "#00ADB5", height: "0.5px" }} />
        </Box>
    );
};

export default Skillset;
