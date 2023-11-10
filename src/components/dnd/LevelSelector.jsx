// NumberSelectorMaterial.jsx
import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function LevelSelector({ label = "..."}) {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <FormControl variant="filled" style={{ width: '100%' }}>
      <InputLabel id="number-label">{label}</InputLabel>
      <Select
        labelId="number-label"
        value={selectedNumber}
        onChange={handleChange}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
          <MenuItem key={number} value={number}>
            {number}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LevelSelector;
