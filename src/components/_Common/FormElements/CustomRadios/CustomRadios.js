import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

function CustomRadios({ ...props }) {
  const [field, meta] = useField(props);
  const gender = ['Male', 'Female', 'Other'];

  return (
    <FormControl error={Boolean(meta.touched && meta.error)} sx={{ mb: 3 }}>
      <FormLabel id={props.id}>
        {props.title} {props.requiredmsg}
      </FormLabel>
      <RadioGroup row {...props} {...field}>
        {gender.map((kind) => (
          <FormControlLabel value={kind} control={<Radio />} label={kind} key={kind} />
        ))}
      </RadioGroup>
      {meta.touched && meta.error ? (
        <FormHelperText name={props.name} sx={{ mx: 0 }}>
          {meta.error}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}
CustomRadios.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  requiredmsg: PropTypes.string.isRequired,
};
export default CustomRadios;
