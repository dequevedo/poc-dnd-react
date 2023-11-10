// NumberSelectorMaterial.jsx
import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './DropdownSelector.css'

function DropdownSelector({ label = "...", values = []}) {
  const [selectedNumber, setSelectedNumber] = useState("Valor Indefinido no Dropdown");

  const handleChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <FormControl variant="filled" style={{ width: '100%'}} className='dropdownSelector'>
      <InputLabel id="number-label">{label}</InputLabel>
      <Select
        labelId="number-label"
        value={selectedNumber}
        onChange={handleChange}
      >
        {values.map((characterClass) => (
          <MenuItem key={characterClass} value={characterClass}>
            {characterClass}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DropdownSelector;
