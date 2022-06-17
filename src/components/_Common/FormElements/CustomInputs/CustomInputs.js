import { useField } from 'formik';
import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

function CustomInputs({ ...props }) {
  const [field, meta] = useField(props);
  // console.log(meta);
  return (
    <TextField
      rows={props.multiline ? 3 : ''}
      {...field}
      {...props}
      fullWidth
      sx={{ mb: 3 }}
      variant="standard"
      label={`${props.title} ${props.requiredmsg}`}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ''}
      InputProps={{ endAdornment: props.endAdornment }}
    />
  );
}
CustomInputs.propTypes = {
  id: PropTypes.string.isRequired,
  multiline: PropTypes.string.isRequired,
  endAdornment: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requiredmsg: PropTypes.string.isRequired,
};

export default CustomInputs;
