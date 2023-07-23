import { ReactElement } from "react"
import profile from "../assets/CV_PROFILE_PIC.png"
import Avatar, { AvatarProps } from "@mui/material/Avatar"
import Grid from "@mui/material/Grid"
import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from "@mui/material/Typography"



export const TypographyCustomized = styled(Typography)<TypographyProps>(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: "center",
    },
    [theme.breakpoints.up('sm')]: {
        textAling: 'left'
    }
}));

export const AvatarCustomized = styled(Avatar)<AvatarProps>(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: "center",
    }
}));

export default function ProfileImage(): ReactElement {

    return (
        <Grid container direction={{ xs: 'column', sm: 'row' }}>
            <AvatarCustomized variant={"rounded"} alt="profile_image" src={profile} style={{
                height: 150,
                width: 150,
                maxHeight: 150,
                maxWidth: 150,
                borderRadius: '10px'
            }} />
            <Grid sx={{margin: '25px'}}>
                <TypographyCustomized sx={{
                    fontWeight: "bold", fontSize: '28px'
                }}>Arcadio Ramos</TypographyCustomized>
                <TypographyCustomized variant={"subtitle2"}>Full Stack Developer</TypographyCustomized>
            </Grid>
        </Grid>
    )
}

