import React from 'react';
import { TextField } from '@mui/material';

const SearchField = ({ value, onChange }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      label="Search Images"
      variant="outlined"
      fullWidth
    />
  );
};

export default SearchField;
