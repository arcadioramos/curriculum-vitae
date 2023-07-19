import Typography from "@mui/material/Typography";
import { ReactNode } from "react"
import DescriptionList from "./DescriptionList";

export interface SectionProps {
    title?: String;
    subtitle?: String;
    icon?: ReactNode;
    description?: String[];
}

export default function Section({ title, icon, description, subtitle }: SectionProps) {
    return (
        <>
           
                <Typography variant="h5" align="justify">
                    {icon} {title}
                </Typography>
                <DescriptionList subtitle={subtitle} description={description}/>

        
            

        </>
    )
}
