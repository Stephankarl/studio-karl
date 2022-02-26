import React from 'react'
import { Grid } from '@mui/material'

import Video from '../content/video/video-1.mp4'

export default function VideoContainer() {
  return (
    <Grid container>
        <video width="100%" height="600" controls>
            <source src={Video} type="video/mp4"/>
        </video>
    </Grid>
  )
}
