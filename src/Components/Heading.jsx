import {Typography} from "@mui/material";

const Heading = ()=>{
    return(
        <>
            <Typography variant="h6" color="rgb(117, 251, 253)" sx={{ fontFamily: 'monospace' }}>
                Hi, my name is
            </Typography>
            <Typography variant="h2" color="rgb(200, 200, 200)" fontFamily="Archivo Black">
                Satvik Mishra
            </Typography>
            <Typography variant="h3" color="rgb(117, 251, 253)" sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                Full Stack Developer
            </Typography>
            <Typography variant="body1" color="rgb(180, 180, 180)" sx={{ marginTop: 2 }}>
                I am currently an Undergrad BTech Computer Science and AIML Student.
                <br />
                I am a Java Full Stack Developer
                <br />
                I love to build, contribute, and code.
            </Typography>
            <Typography variant="body1" color="rgb(117, 251, 253)" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                I am open for Work & Collaboration.
            </Typography>
        </>
    );
}
export default Heading;