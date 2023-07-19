import React from 'react'
import { SectionProps } from './Section'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

interface DescriptionListInterface extends SectionProps {
    
}

export default function DescriptionList({ title, icon, description, subtitle }: DescriptionListInterface) {
    return (
        <Box>
            <Typography variant="subtitle2" align="justify" sx={{ fontWeight: "bold" }}>
                {subtitle}
            </Typography>
            <List>
                {description?.length !== 0 && description?.map((item, index) => {
                    return (
                        <ListItem key={`${item}-${index}`}>
                            <ListItemText primary={item} primaryTypographyProps={{variant: "subtitle2"}}/>
                        </ListItem>
                    )
                })}
            </List>

        </Box>
    )
}
