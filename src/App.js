
//Import files
// import ProfileGallery from './components/ProfileGallery'
import NavBar from './components/NavBar'
// import VideoContainer from './components/VideoContainer';
import Services from './components/Services'
// import Mission from './components/Mission'
// import About from './components/About';
import InstaContainer from './components/InstaContainer';

//Material UI
import { Grid } from '@mui/material'

function App() {
  return (
    <Grid container>
      <NavBar />
      {/* <VideoContainer /> */}
      {/* <ProfileGallery /> */}
      <Services />
      {/* <Mission /> */}
      {/* <About /> */}
      <InstaContainer />
    </Grid>
  );
}

export default App;
