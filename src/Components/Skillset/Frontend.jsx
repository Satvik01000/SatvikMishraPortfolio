import Grid2 from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import HTMLLogo from "../../util/Skills/Frontend/icons8-html-5.svg";
import CSSLogo from "../../util/Skills/Frontend/icons8-css-logo.svg";
import JavaScriptLogo from "../../util/Skills/Frontend/icons8-javascript.svg";
import ReactLogo from "../../util/Skills/Frontend/1174949_js_react js_logo_react_react native_icon.svg";
import MaterialUILogo from "../../util/Skills/Frontend/icons8-material-ui.svg";
import React from "react";

const Frontend = () => {
    return (
        <Grid2 container spacing={17} justifyContent="center" alignItems="center" mt={3}>
            {[
                { src: HTMLLogo, name: "HTML", width: 125-20, height: 125-20 },
                { src: CSSLogo, name: "CSS", width: 120-20, height: 120-20 },
                { src: JavaScriptLogo, name: "JavaScript", width: 120-20, height: 120-20 },
                { src: ReactLogo, name: "React", width: 160-20, height: 100-20 },
                { src: MaterialUILogo, name: "Material UI", width: 110-20, height: 110-20 }
            ].map((skill, index) => (
                <Grid2 item key={index}>
                    <Box textAlign="center">
                        <img
                            src={skill.src}
                            alt={skill.name}
                            style={{ width: skill.width, height: skill.height }}
                        />
                        <Typography variant="h6" sx={{ color: "#d3d2d2", mt: 1, fontWeight: "bold" }}>
                            {skill.name}
                        </Typography>
                    </Box>
                </Grid2>
            ))}
        </Grid2>
    );
};

export default Frontend;
