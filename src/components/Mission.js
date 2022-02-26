import React from 'react'
import { Grid, Typography } from '@mui/material'

import Photo from '../content/profile/blackshirt-standing.jpeg'

export default function Mission() {
  return (
    <Grid container my={3} style={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Photo} alt='Macy' width='100%' />
        </Grid>
        <Grid item xs={12} md={8}>
            <Typography variant='h5' m={3} align='center'>Our Mission</Typography>
            <Typography variant='body' p={2} paragraph align='center'>
                At Studio-Karl, we are committed to using our interior design experience and expertise to create a meaningful space that works realistically with your lifestyle. Whether we are working to a brief or given free rein over a project, our goals are simple: to provide a stress-free experience, along with a result that fulfils a clients’ every want and need for their home.
            </Typography>
        </Grid>
    </Grid>
  )
}
