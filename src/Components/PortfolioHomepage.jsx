import { Box, Container, ImageList, ImageListItem, Typography } from "@mui/material";
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
            <Achievements_and_Certifications />
        </Container>
    );
};

export default PortfolioHomepage;