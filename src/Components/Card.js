import * as React from 'react';
import './Card.scss'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Short from '../assets/short.svg'
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const upper_img = 'https://prod-discovery.edx-cdn.org/organization/logos/518a47f2-66fb-4529-8902-a4f7ca3002ef-78d294b01e63.png'
const img = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'


function CourseCard() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{
      cursor: 'pointer'
    }} className='card-container'>
      <img style={{ maxHeight: '100px', minWidth: '100%' }}
        src={img} alt='' />
      <img className='upper_img'
        src={upper_img} alt='' />
      <br />
      <div className='card-details'>
        <h4>Basic spanish</h4>
        <h6>UPVanicleX</h6>
        <div className='card-tag'>
          <img src={Short} alt='' />
          <p>Professional Certificate</p>
        </div>
        <p>3 courses</p>
      </div>
    </Card>
  );
}
export default CourseCard;