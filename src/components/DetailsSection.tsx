import DescriptionList from "./DescriptionList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface DetailsSectionProps {
    title?: String;
    subtitle?: String;
    description?: String[];
}

export default function DetailsSection({ title, description, subtitle }: DetailsSectionProps) {
    return (
        <Box sx={{ MinWidth: 320, maxWidth: 350 }}>
            <Typography variant="h5" align="justify" sx={{ fontWeight: "bold", fontSize: '1.2rem' }}>
                {title}
            </Typography>
        </Box>
    )
}
