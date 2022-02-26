import * as React from 'react';
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'

import Photo1 from '../content/profile/blackshirt-standing.jpeg'
import Photo2 from '../content/profile/sitting-legs-crossed.jpeg'
import Photo3 from '../content/profile/standing-bathroom.jpeg'

export default function WovenImageList() {
  return (
    <Grid container>
      <Grid item xs={12} m={3}>
        <Typography variant='h3' align='center'>Portfolio</Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}

const itemData = [
  {
    img: Photo1,
    title: 'Black Shirt Standing',
  },
  {
    img: Photo2,
    title: 'Sitting legs crossed',
  },
  {
    img: Photo3,
    title: 'Standing Bathroom',
  },
];
