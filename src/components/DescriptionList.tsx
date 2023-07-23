import { SectionProps } from './Section'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

export default function DescriptionList({ description, subtitle, dateOfWork, isDetailsSection }: SectionProps) {
    return (
        <Box>
            <Typography variant="subtitle2" align="justify" sx={{ fontWeight: "bold" }}>
                {subtitle}
            </Typography>
            {dateOfWork &&
                <Typography align="justify" sx={{ fontWeight: 400, fontSize: '13px', color: '#00000099' }}>
                    {dateOfWork}
                </Typography>

            }
            <List sx={{ paddingTop: 0 }}>
                {description?.length !== 0 && description?.map((item, index) => {
                    return (
                        <ListItem key={`${item}-${index}`} sx={{ paddingTop: 0, paddingBottom: 0, paddingLeft: isDetailsSection ? 0 : '16px' }}>
                            <ListItemText primary={item} primaryTypographyProps={{ variant: "subtitle2" }} />
                        </ListItem>
                    )
                })}
            </List>

        </Box>
    )
}
