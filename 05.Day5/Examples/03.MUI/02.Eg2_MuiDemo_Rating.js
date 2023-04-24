import {Rating, Stack} from '@mui/material';
import {useState}  from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 

function MuiDemo() { 

  const [value, setValue] = useState(0); 
  return (
    <>         

    <h3>Working Materila UI Components -- Rating</h3>
    <hr/> 
      {/*  size =  "large,small,medium"   */}
      <Rating      /> <br/>

      <Rating name="size-large"                
              size="large"
              value={value}
              onChange={(e) => { setValue(e.target.value); }}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
  

    <h3>Rating :   {value}</h3>

    </>   
  );
}

export default MuiDemo;
