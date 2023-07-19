import Typography from "@mui/material/Typography";
import { ReactNode } from "react"

interface SectionProps {
    title?: String;
    icon?: ReactNode;
    description?: String;
}

export default function Section({ title, icon, description }: SectionProps) {
    return (
        <>
            {title && <>
                <Typography variant="h5" align="justify">
                    {icon} {title}
                </Typography>
                <Typography>{description}</Typography>

            </>
            }

        </>
    )
}
