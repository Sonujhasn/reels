import React from 'react'
import { Button,LinearProgress } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
function upload() {
  return (
    <div className='upload-btn'>
        <Button variant="outlined" component="label"
            startIcon={<MovieIcon/>} style={{marginTop:'0.5rem'}} fullWidth>
                <input type="file" accept="image/*" style={{display:'none'}}/>
                Upload
        </Button>
        <LinearProgress style={{marginTop:"0.2rem"}} variant="determinate" value={50} />
    </div>
  )
}

export default upload