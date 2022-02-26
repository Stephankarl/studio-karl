import React, { useState } from 'react'
import axios from 'axios'

import { Grid, Button } from '@mui/material'
  
  export default function InstaContainer() {

    const [posts, setPosts] = useState(null)
    const handleInsta = async () => {
      const res = await axios.get('https://studio-karl-api.herokuapp.com/auth/instagram')
      setPosts(res.data)
    }

    return (
      <Grid container>
        { posts && <div>Posts received</div>}
        <Button onClick={handleInsta}>Instagram</Button>
      </Grid>
    )
}
