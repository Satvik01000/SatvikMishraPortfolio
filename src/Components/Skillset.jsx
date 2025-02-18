import React from "react";
import { Box, Typography, Divider, Grid2 } from "@mui/material";
import "@fontsource/poppins";
import JavaLogo from "../util/Skills/java.svg";
import SpringBootLogo from "../util/Skills/icons8-spring-boot.svg";
import MavenLogo from "../util/Skills/Apache_Maven_logo.svg";
import Logo from "../util/Skills/icons8-c++.svg"
import MySQLLogo from "../util/Skills/logo-mysql.png"

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

            <Grid2 container spacing={15} justifyContent="center" alignItems="center" mt={3}>
                <Grid2 item>
                    <img src={JavaLogo} alt="Java" style={{ width: 130, height: 130}} />
                </Grid2>
                <Grid2 item>
                    <img src={SpringBootLogo} alt="Spring Boot" style={{ width: 120, height: 120 }} />
                </Grid2>
                <Grid2 item>
                    <img src={MavenLogo} alt="Maven" style={{ width: 190, height: 50, backgroundColor:"white" }} />
                </Grid2>
                <Grid2 item>
                    <img src={MySQLLogo} alt="C++" style={{ width: 160, height: 100}} />
                </Grid2>
                <Grid2 item>
                    <img src={Logo} alt="C++" style={{ width: 110, height: 110}} />
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Skillset;
