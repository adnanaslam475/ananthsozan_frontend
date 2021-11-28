import './App.css';
import { Grid } from '@mui/material';
import CourseCard from './Components/Card';
import Header from './Components/Header'
import SearchBanner from './Components/SearchBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBanner />
      {/* <Grid container spacing={1}>
        {['', '', '', ''].map(v => <Grid item md={4} sm={6}
          xs={12} lg={4} xl={4}>
          <CourseCard /></Grid>)}
      </Grid> */}
    </div>
  );
}

export default App;
