import React from 'react';
import { useField } from 'formik';
import { Box, FormControl, FormHelperText, FormLabel } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import styles from './customcheckbox.module.css';

function Customcheckbox({ ...props }) {
  const [field, meta] = useField(props);

  const hobbies = ['Coding', 'Reading', 'Baking', 'Fishing', 'Blogging', 'Fashion', 'Acting'];
  return (
    <FormControl error={Boolean(meta.touched && meta.error)}>
      <FormLabel>
        {props.title} &nbsp;
        {props.requiredmsg}
      </FormLabel>
      <Box className="d-flex flex-wrap w-100">
        {hobbies.map((hobby) => (
          <FormGroup className={styles.formGroup} key={hobby}>
            <FormControlLabel
              control={<Checkbox checked={field.value.includes(hobby)} value={hobby} />}
              {...props}
              {...field}
              label={hobby}
            />
          </FormGroup>
        ))}
      </Box>
      {meta.touched && meta.error ? (
        <FormHelperText name={props.name} className="d-block">
          {meta.error}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}
Customcheckbox.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requiredmsg: PropTypes.string.isRequired,
};
export default Customcheckbox;
