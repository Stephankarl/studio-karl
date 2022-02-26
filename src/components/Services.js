import React from 'react'
import { Grid, Typography } from '@mui/material'

export default function Services() {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Typography variant='h3' mb={3} align='center'>Services</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
            <Typography variant='h5' align='center'>Just the Accessories</Typography>
            <Typography variant='body' paragraph align='center' m={2}>Have all the big pieces, but don’t know how to bring it all together? We specialize in styling and accessorizing</Typography>
            <Typography variant='body' paragraph align='center' m={2}>During this phase we will refurnish items and shop for all the accessories including vases, throw pillows, art, and more to bring your space together and make it feel complete</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
            <Typography variant='h5' align='center'>Furnishings and Styling</Typography>
            <Typography variant='body' paragraph align='center' m={2}>Ready to furnish your home?
From including furnishings that you already own, to starting with a blank canvas, we will present high-quality furnishings that suit your lifestyle and budget. After orders are places, we will see things through to delivery and installation.</Typography>
            <Typography variant='body' paragraph align='center' m={2}>Our furnishing service is inclusive of everything you need: lighting, furniture, window coverings, area rugs, accessories, art, and more!</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
            <Typography variant='h5' align='center'>Material & Finish Selection</Typography>
            <Typography variant='body' paragraph align='center' m={2}>We are there by your side to define what you love and how to put it all together, so every element lives together.</Typography>
            <Typography variant='body' paragraph align='center' m={2}>We do it all – lighting, fixtures, tile, and backsplash selections. Just ask!
</Typography>
        </Grid>
    </Grid>
  )
}
