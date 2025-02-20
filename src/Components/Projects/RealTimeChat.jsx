import React, { useState } from "react";
import { Box, Typography, Chip, Stack, IconButton, Grid2 } from "@mui/material";
import { GitHub as GitHubIcon, Language as LanguageIcon, ArrowBack, ArrowForward } from "@mui/icons-material";
import RealTimeChatImage from "../../util/Projects/RealTimeChat.png";

const images = [RealTimeChatImage];

const RealTimeChatComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Box sx={{ mt: 12, mb: 12, px: 4 }}>
            <Grid2 container spacing={4} alignItems="center">
                {/* Image Carousel Section */}
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton onClick={handlePrev} sx={{ color: "#fff" }}>
                        <ArrowBack />
                    </IconButton>
                    <img
                        src={images[currentIndex]}
                        alt="Real-Time Chat Screenshot"
                        style={{
                            width: "95%",
                            height: "auto",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                        }}
                    />
                    <IconButton onClick={handleNext} sx={{ color: "#fff" }}>
                        <ArrowForward />
                    </IconButton>
                </Grid2>

                {/* Description Section */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography variant="h4" sx={{ color: "#fff", fontWeight: 600 }}>
                        1) Real-Time Chat (Full Stack)
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#aaa", mt: 2 }}>
                        A real-time, room-based chat application built with Spring Boot and React, featuring WebSocket communication, user authentication, persistent chat history, and a scalable architecture for seamless user interaction.
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mt: 3, margin: 2, gap: 2, flexWrap: "wrap" }}>
                        <Chip label="Spring Boot" sx={{ backgroundColor: "#0b8043", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="Spring Data JPA" sx={{ backgroundColor: "#156c3f", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="Spring Security" sx={{ backgroundColor: "#1b5e20", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="JWT Auth" sx={{ backgroundColor: "#d17c00", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="Mongo DB" sx={{ backgroundColor: "#8400d1", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="Web Sockets" sx={{ backgroundColor: "#ba3d3d", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="HTML" sx={{ backgroundColor: "#dc4200", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="CSS" sx={{ backgroundColor: "#0066cc", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="JavaScript" sx={{ backgroundColor: "#dcab00", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="React" sx={{ backgroundColor: "#0096aa", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="Material UI" sx={{ backgroundColor: "#0066cc", color: "#fff", fontWeight: "bold" }} />
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: "wrap", ml: 2 }}>
                        <GitHubIcon htmlColor="#ffffff" fontSize="large" onClick={() => window.open("", "_blank")} style={{ cursor: "pointer" }} />
                        <LanguageIcon htmlColor="#ffffff" fontSize="large" onClick={() => window.open("", "_blank")} style={{ cursor: "pointer" }} />
                    </Stack>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default RealTimeChatComponent;