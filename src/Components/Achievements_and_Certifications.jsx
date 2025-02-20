import { Box, Divider, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import Code_Chef_DSA from "../util/Certificates/Code_Chef_DSA.jpg";
import Coding_Ninjas from "../util/Certificates/Coding_Ninjas_C++_Certificate.jpg";
import NPTEL from "../util/Certificates/Data Structure and Algorithms using Java.jpg";
import Python from "../util/Certificates/Python_essentials_certificates-images-0.jpg";
import LeetCode from "../util/Certificates/LeetcodeProfile.png";
import InterviewBit from "../util/Certificates/InterviewBit.png";

const certificates = [
    { src: LeetCode, name: "LeetCode Profile" },
    { src: InterviewBit, name: "InterviewBit Profile" },
    { src: Code_Chef_DSA, name: "CodeChef DSA" },
    { src: Coding_Ninjas, name: "Coding Ninjas C++" },
    { src: NPTEL, name: "NPTEL Data Structures" },
    { src: Python, name: "Cisco Python Essentials" }
];

const Achievements_and_Certifications = () => {
    return (
        <Box sx={{ mt: 8, px: 4 }}>
            <Box display="flex" alignItems="center" justifyContent="center" width="100%" mb={2}>
                <Divider sx={{ flexGrow: 1, bgcolor: "#00ADB5", height: "2px", mx: 2 }} />
                <Typography
                    variant="h4"
                    fontWeight="600"
                    textAlign="center"
                    sx={{ color: "#d3d2d2", textTransform: "capitalize", fontFamily: "Poppins, sans-serif", fontSize: 35 }}
                >
                    Achievements and Certifications
                </Typography>
                <Divider sx={{ flexGrow: 1, bgcolor: "#00ADB5", height: "2px", mx: 2 }} />
            </Box>

            <ImageList cols={3} gap={16} rowHeight="auto" sx={{ justifyContent: "center" }}>
                {certificates.map((cert, index) => (
                    <ImageListItem key={index} cols={cert.src === LeetCode ? 3 : 1} sx={{ textAlign: "center" }}>
                        <a href={cert.src} target="_blank" rel="noopener noreferrer">
                            <img
                                src={cert.src}
                                alt={cert.name}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxHeight: "200px",
                                    objectFit: "contain",
                                    borderRadius: "8px",
                                    cursor: "pointer"
                                }}
                            />
                        </a>
                        <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 500, color: "#d3d2d2" }}>
                            {cert.name}
                        </Typography>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default Achievements_and_Certifications;