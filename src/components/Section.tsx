import Typography from "@mui/material/Typography";
import { ReactNode } from "react"
import { useTranslation } from "react-i18next"

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
