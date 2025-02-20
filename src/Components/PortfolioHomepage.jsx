import { Box, Container, Typography } from "@mui/material";
import "@fontsource/archivo-black";
import Heading from "./Heading/Heading";
import Skillset from "./Skillset/Skillset";
import Projects from "./Projects/Projects";
import Achievements_and_Certifications from "./Achievements_and_Certifications";

const PortfolioHomepage = () => {
    return (
        <Container
            maxWidth={false}
            sx={{ width: '90%', height: '100%', backgroundColor: 'rgb(19, 20, 23)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
            <Heading/>
            <Skillset/>
            <Projects/>
            <Achievements_and_Certifications/>

            {/* Footer Section */}
            <Box sx={{ textAlign: "center", py: 3, color: "gray", mt: 5, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <Typography variant="body2">Built with ❤️ by Satvik</Typography>
                <Typography variant="caption" fontStyle="italic">
                    "Code. Create. Contribute."
                </Typography>
            </Box>
        </Container>
    );
};

export default PortfolioHomepage;
