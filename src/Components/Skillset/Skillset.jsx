import React from "react";
import { Box, Typography, Divider, Grid2 } from "@mui/material";
import "@fontsource/poppins";
import Backend from "./Backend";
import Frontend from "./Frontend";

const Skillset = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" my={4} width="100%">
            <Box display="flex" alignItems="center" justifyContent="center" width="100%" mb={2}>
                <Divider sx={{ flexGrow: 1, bgcolor: "#00ADB5", height: "2px", mx: 2 }} />
                <Typography
                    variant="h4"
                    fontWeight="600"
                    textAlign="center"
                    sx={{ color: "#d3d2d2", textTransform: "capitalize", fontFamily: "Poppins, sans-serif", fontSize: 35 }}
                >
                    Skillset
                </Typography>
                <Divider sx={{ flexGrow: 1, bgcolor: "#00ADB5", height: "2px", mx: 2 }} />
            </Box>
            <Box sx={{mt:8}}>
                <Backend/>
                <Frontend/>
            </Box>
        </Box>
    );
};

export default Skillset;
