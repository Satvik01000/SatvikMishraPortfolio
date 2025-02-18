import { Box, Container, ImageList, ImageListItem, Typography } from "@mui/material";
import "@fontsource/archivo-black";
import Heading from "./Heading";
import ProfileLinks from "./ProfileLinks";
import Skillset from "./Skillset";

const PortfolioHomepage = () => {
    return (
        <Container
            maxWidth={false}
            sx={{ width: '96%', height: '100vh', backgroundColor: 'rgb(19, 20, 23)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
            <Heading/>
            <ProfileLinks/>
            <Skillset/>
        </Container>
    );
};

export default PortfolioHomepage;