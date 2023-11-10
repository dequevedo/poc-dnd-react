import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './BasicTextFields.css';

export default function BasicTextFields({ label = '...'}) {
  return (
    <Box>
      <TextField
        id="filled-basic"
        label={label}
        variant="filled"
        className="my-text-field"
        style={{ width: '100%' }}
      />
    </Box>
  );
}