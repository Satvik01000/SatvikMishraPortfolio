import React, { useState } from "react";
import { Box, Typography, Chip, Stack, IconButton, Grid2 } from "@mui/material";
import { GitHub as GitHubIcon, Language as LanguageIcon, ArrowBack, ArrowForward } from "@mui/icons-material";
import ECommerceImage from "../../util/Projects/E-Commerce (Backend).png"

const images = [ECommerceImage];

const ECommerce = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Box sx={{ mt: 12, mb: 12, px: 4 }}>
            <Grid2 container spacing={4} alignItems="center">
                {/* Description Section */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography variant="h4" sx={{ color: "#fff", fontWeight: 600 }}>
                        4) E-Commerce (Backend Only)
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#aaa", mt: 2 }}>
                        This project is a Spring Boot application for managing products and categories. It includes RESTful endpoints for creating, retrieving, and deleting products, as well as handling custom exceptions. The application uses JPA for database interactions and Lombok for reducing boilerplate code.
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mt: 3, margin: 2, gap: 2, flexWrap: "wrap" }}>
                        <Chip label="Spring Boot" sx={{ backgroundColor: "#0b8043", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="Spring Data JPA" sx={{ backgroundColor: "#156c3f", color: "#fff", fontWeight: "bold" }} />
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: "wrap", ml: 2 }}>
                        <GitHubIcon htmlColor="#ffffff" fontSize="large" onClick={() => window.open("https://github.com/Satvik01000/ProductService", "_blank")} style={{ cursor: "pointer" }} />
                        <LanguageIcon htmlColor="#ffffff" fontSize="large" onClick={() => window.open("", "_blank")} style={{ cursor: "pointer" }} />
                    </Stack>
                </Grid2>

                {/* Image Carousel Section */}
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton onClick={handleNext} sx={{ color: "#fff" }}>
                        <ArrowBack />
                    </IconButton>
                    <img
                        src={images[currentIndex]}
                        alt="Smart Spender Screenshot"
                        style={{
                            width: "95%",
                            height: "auto",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                        }}
                    />
                    <IconButton onClick={handlePrev} sx={{ color: "#fff" }}>
                        <ArrowForward />
                    </IconButton>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default ECommerce;