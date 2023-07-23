import { ReactNode } from "react"
import DescriptionList from "./DescriptionList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface SectionProps {
    title?: String;
    subtitle?: String;
    icon?: ReactNode;
    description?: String[];
    dateOfWork?: string;
}

export default function Section({ title, icon, description, subtitle, dateOfWork }: SectionProps) {
    return (
        <Box sx={{MinWidth: 320, maxWidth: 550}}>
            <Typography variant="h5" align="justify" sx={{fontWeight: "bold", fontSize: '1.2rem'}}>
                {icon} {title}
            </Typography>
            <DescriptionList subtitle={subtitle} description={description} dateOfWork={dateOfWork} />
        </Box>
    )
}
