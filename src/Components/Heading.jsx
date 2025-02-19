import { Box, Typography, Container } from "@mui/material";
import ProfileLinks from "./ProfileLinks";
import MyImage from "../util/C988C886-9088-4B3B-B90C-5A782300E384.jpeg";

const Heading = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between", // Ensures spacing between text and image
                    mt: 30,
                    mb: 40,
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