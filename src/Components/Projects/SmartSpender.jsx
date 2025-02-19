import { Box, Typography, Chip, Stack } from "@mui/material";
import {Grid2} from "@mui/material";
import React from "react";
import { GitHub as GitHubIcon, Language as LanguageIcon } from '@mui/icons-material';

const SmartSpender = () => {
    const SmartSpenderVideo = new URL("../../util/Projects/SmartSpender.mov", import.meta.url).href;

    return (
        <Box sx={{ mt: 8, mb: 8, px: 4 }}>
            <Grid2 container spacing={4} alignItems="center">
                {/* Video Section */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <video
                        src={SmartSpenderVideo}
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
                        }}
                        controls
                        onMouseOver={e => e.target.controls = true}
                        onMouseOut={e => e.target.controls = false}>
                    </video>
                </Grid2>

                {/* Description Section */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography variant="h4" sx={{ color: "#fff", fontWeight: 600 }}>
                        1) Smart Spender
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#aaa", mt: 2 }}>
                        A full-stack expense tracker and analyzer made with Spring Boot and React, featuring Spring Security and JWT authentication, RESTful APIs, Charts.js for real-time analytics.
                    </Typography>

                    <Stack direction="row-reverse" spacing={1} sx={{ mt: 3, flexWrap: "wrap" }}>
                        <Chip label="Material UI" sx={{ backgroundColor: "#007fff", color: "#fff" }} />
                        <Chip label="React" sx={{ backgroundColor: "#00d8ff", color: "#000" }} />
                        <Chip label="JWT Auth" sx={{ backgroundColor: "#e48d00", color: "#fff" }} />
                        <Chip label="Spring Security" sx={{ backgroundColor: "#168f4d", color: "#fff" }} />
                        <Chip label="Spring JPA" sx={{ backgroundColor: "#168f4d", color: "#fff" }} />
                        <Chip label="Spring Boot" sx={{ backgroundColor: "#168f4d", color: "#fff" }} />
                    </Stack>
                    <Stack direction="row-reverse" spacing={2} sx={{ mt: 3, flexWrap: "wrap", mr:3 }}>
                        <LanguageIcon htmlColor="#ffffff" fontSize="large" onClick={() => window.open("https://github.com/Satvik01000/SmartSpender", "_blank")} style={{ cursor: "pointer" }} />
                        <GitHubIcon htmlColor="#ffffff" fontSize="large" onClick={() => window.open("https://github.com/Satvik01000/SmartSpender", "_blank")} style={{ cursor: "pointer" }} />
                    </Stack>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default SmartSpender;
