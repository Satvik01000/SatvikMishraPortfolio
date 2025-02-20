import { Box, Typography, Container, Button } from "@mui/material";
import { Download } from "@mui/icons-material"; // Import the download icon
import ProfileLinks from "./ProfileLinks";
import MyImage from "../../util/C988C886-9088-4B3B-B90C-5A782300E384.jpeg";

const Heading = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 30,
                    mb: 35,
                }}
            >
                {/* Left Side - Text and Links */}
                <Box sx={{ maxWidth: "60%" }}>
                    <Typography variant="h6" color="rgb(117, 251, 253)" sx={{ fontFamily: "monospace" }}>
                        Hi, my name is
                    </Typography>
                    <Typography variant="h2" color="rgb(200, 200, 200)" fontFamily="Archivo Black">
                        Satvik Mishra
                    </Typography>
                    <Typography variant="h3" color="rgb(117, 251, 253)" sx={{ fontFamily: "monospace", fontWeight: "bold" }}>
                        Full Stack Developer
                    </Typography>
                    <Typography variant="body1" color="rgb(180, 180, 180)" sx={{ marginTop: 2 }}>
                        I am currently an Undergrad BTech Computer Science and AIML Student.
                        <br />
                        I am a Java Full Stack Developer
                        <br />
                        I love to build, contribute, and code.
                    </Typography>
                    <Typography variant="body1" color="rgb(117, 251, 253)" sx={{ fontWeight: "bold", marginTop: 1 }}>
                        I am open for Work & Collaboration.
                    </Typography>
                    <ProfileLinks />

                    {/* Resume Button */}
                    <Button
                        variant="contained"
                        sx={{
                            mt: 8,
                            backgroundColor: "#3B82F6",
                            color: "#ffffff",
                            borderRadius: "8px",
                            fontWeight: "bold",
                            textTransform: "none",
                            padding: "10px 20px",
                            fontSize: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            "&:hover": {
                                backgroundColor: "#2563EB",
                            },
                        }}
                        onClick={() => window.open("https://drive.google.com/file/d/1dGoN9HveNDpxMi5GOtZ_jqSWFRUFH9HI/view?usp=sharing")}
                    >
                        Resume <Download sx={{ fontSize: 20 }} />
                    </Button>
                </Box>

                {/* Right Side - Image */}
                <Box>
                    <img
                        src={MyImage}
                        alt="Satvik Mishra"
                        style={{
                            width: "26vw",
                            height: "66vh",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Heading;