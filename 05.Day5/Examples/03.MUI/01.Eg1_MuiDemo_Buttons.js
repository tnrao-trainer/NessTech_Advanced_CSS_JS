//  import Button from '@mui/material/Button';
//  import Stack from '@mui/material/Stack';

 import { Button, Stack} from '@mui/material';

export default function MuiDemo() {
 

  return (
    <div>
     <h3>Working Materila UI Components -- Buttons</h3>
      <hr/> 
      <Stack direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}