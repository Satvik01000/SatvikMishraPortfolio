import React, { useState } from "react";
import { Box, Typography, Chip, Stack, IconButton, Grid2 } from "@mui/material";
import { GitHub as GitHubIcon, Language as LanguageIcon, ArrowBack, ArrowForward } from "@mui/icons-material";
import FoodOrderImage1 from "../../util/Projects/FoodOrder/1.png"
import FoodOrderImage2 from "../../util/Projects/FoodOrder/2.png"
import FoodOrderImage3 from "../../util/Projects/FoodOrder/3.png"
import FoodOrderImage4 from "../../util/Projects/FoodOrder/4.png"
import FoodOrderImage5 from "../../util/Projects/FoodOrder/5.png"


const images = [FoodOrderImage1, FoodOrderImage2, FoodOrderImage3, FoodOrderImage4, FoodOrderImage5];

const FoodOrder = () => {
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
                        6) Food-Order (Frontend Only)
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#aaa", mt: 2 }}>
                        This project is a React-based web application for a food delivery service. It allows users to browse and search for restaurants, view detailed information about each restaurant, and place orders. The application uses Parcel for bundling and Jest for testing. It integrates with the Swiggy API to fetch restaurant data dynamically.
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mt: 3, margin: 2, gap: 2, flexWrap: "wrap" }}>
                        <Chip label="HTML" sx={{ backgroundColor: "#dc4200", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="JavaScript" sx={{ backgroundColor: "#dcab00", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="React" sx={{ backgroundColor: "#0096aa", color: "#fff", fontWeight: "bold" }} />
                        <Chip label="CSS" sx={{ backgroundColor: "#0066cc", color: "#fff", fontWeight: "bold" }} />
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: "wrap", ml: 2 }}>
                        <GitHubIcon htmlColor="#ffffff" fontSize="large" onClick={() => window.open("https://github.com/Satvik01000/FoodOrderWebsite", "_blank")} style={{ cursor: "pointer" }} />
                        <LanguageIcon htmlColor="#ffffff" fontSize="large" onClick={() => window.open("https://youtu.be/Ai0xCI1xlO4", "_blank")} style={{ cursor: "pointer" }} />
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

export default FoodOrder;