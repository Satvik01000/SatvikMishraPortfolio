import { Box, Container, ImageList, ImageListItem, Typography } from "@mui/material";
import "@fontsource/archivo-black";
import Heading from "./Heading";
import ProfileLinks from "./ProfileLinks";
import Skillset from "./Skillset/Skillset";
import Projects from "./Projects";

const PortfolioHomepage = () => {
    return (
        <Container
            maxWidth={false}
            sx={{ width: '96%', height: '100%', backgroundColor: 'rgb(19, 20, 23)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
            <Heading/>
            <ProfileLinks/>
            <Skillset/>
            <Projects/>
        </Container>
    );
};

export default PortfolioHomepage;