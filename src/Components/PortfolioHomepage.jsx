import { Box, Container, ImageList, ImageListItem, Typography } from "@mui/material";
import "@fontsource/archivo-black";
import Heading from "./Heading";
import Skillset from "./Skillset/Skillset";
import Projects from "./Projects/Projects";

const PortfolioHomepage = () => {
    return (
        <Container
            maxWidth={false}
            sx={{ width: '90%', height: '100%', backgroundColor: 'rgb(19, 20, 23)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
            <Heading/>
            <Skillset/>
            <Projects/>
        </Container>
    );
};

export default PortfolioHomepage;