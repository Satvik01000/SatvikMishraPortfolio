import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import LeetcodeLogo from "../util/ProfileLinks/LeetcodeLogoWhite.png";
import githubLogo from "../util/ProfileLinks/github-mark-white.png";
import LinkedinLogo from "../util/ProfileLinks/In-Blue-34@2x.png";
import EmailLogo from "../util/ProfileLinks/communication.png";

const ProfileLinks = () => {
    return (
        <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="h5" color="rgb(200, 100, 100)" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                Here are some of my profiles :
            </Typography>
            <ImageList sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }}>
                <ImageListItem sx={{ width: 32, height: 25, mx: 2, transition: "opacity 0.3s", ":hover": { opacity: 0.7 } }} component="a" href="https://leetcode.com/u/Satvik0100/" target="_blank" rel="noopener noreferrer">
                    <img src={LeetcodeLogo} alt="LeetCode Profile" />
                </ImageListItem>
                <ImageListItem sx={{ width: 43, height: 25, mx: 2, transition: "opacity 0.3s", ":hover": { opacity: 0.7 } }} component="a" href="https://github.com/Satvik01000" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub Profile" />
                </ImageListItem>
                <ImageListItem sx={{ width: 42, height: 25, mx: 2, transition: "opacity 0.3s", ":hover": { opacity: 0.7 } }} component="a" href="https://www.linkedin.com/in/satvik0100" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinLogo} alt="LinkedIn Profile" />
                </ImageListItem>
                <ImageListItem sx={{ width: 45, height: 25, mx: 2, transition: "opacity 0.3s", ":hover": { opacity: 0.7 } }} component="a" href="mailto:satvikmishra2192@gmail.com">
                    <img src={EmailLogo} alt="Email" />
                </ImageListItem>
            </ImageList>
        </Box>
    );
};

export default ProfileLinks;