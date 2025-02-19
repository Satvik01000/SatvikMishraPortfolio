import Grid2 from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import JavaLogo from "../../util/Skills/Backend/java.svg";
import SpringBootLogo from "../../util/Skills/Backend/icons8-spring-boot.svg";
import MavenLogo from "../../util/Skills/Backend/Apache_Maven_logo.svg";
import MySQLLogo from "../../util/Skills/Backend/logo-mysql.png";
import Logo from "../../util/Skills/Backend/icons8-c++.svg";
import React from "react";

const Backend = () => {
    return (
        <Grid2 container spacing={15} justifyContent="center" alignItems="center" mt={3}>
            {[
                { src: JavaLogo, name: "Java", width: 130-20, height: 130-20 },
                { src: SpringBootLogo, name: "Spring Boot", width: 120-20, height: 120-20 },
                { src: MavenLogo, name: "Maven", width: 190-20, height: 50-20, bg: "white" },
                { src: MySQLLogo, name: "MySQL", width: 160-20, height: 100-20 },
                { src: Logo, name: "C++", width: 110-20, height: 110 -20}
            ].map((skill, index) => (
                <Grid2 item key={index}>
                    <Box textAlign="center">
                        <img
                            src={skill.src}
                            alt={skill.name}
                            style={{ width: skill.width, height: skill.height, backgroundColor: skill.bg || "transparent" }}
                        />
                        <Typography variant="h6" sx={{ color: "#d3d2d2", mt: 1, fontWeight: "bold" }}>
                            {skill.name}
                        </Typography>
                    </Box>
                </Grid2>
            ))}
        </Grid2>
    );
};

export default Backend;
