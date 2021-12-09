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
      <Grid container spacing={4} className='' style={{
        maxWidth: '95%',
      }}
        margin={2} padding={1}>
        {['', '', '', ''].map((v, i) => <Grid className='web' item
          md={3} sm={6} xs={12} key={i} lg={3} xl={3}>
          <CourseCard />
        </Grid>)}
      </Grid>
    </div>
  );
}

export default App;
