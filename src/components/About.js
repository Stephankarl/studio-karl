import React from 'react'
import { Grid, Typography } from '@mui/material'

import Photo from '../content/profile/sitting-legs-crossed.jpeg'


export default function About() {
  return (
    <Grid container style={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={12} md={8}>
            <Typography variant='h5' m={3} align='center'>About Macy Karl</Typography>
            <Typography variant='body' p={2} paragraph align='center'>
            Interior designer and entrepreneur, Macy Karl has always had a strong passion for design. While completing her degree in 2018, she moved to Hong Kong to advance her husband’s career as a pilot. It was not long after moving back from overseas that she decided to turn her dream into a reality and start her own business, Studio-Karl. What inspires her to pursue her career in Interior Design is creating beautiful spaces that work realistically with your lifestyle. When Macy isn’t designing, you can find her at home with her rescue Pomeranian Jadoo and her husband Stephan.
            </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Photo} alt='Macy' width='100%' />
        </Grid>
    </Grid>
  )
}
