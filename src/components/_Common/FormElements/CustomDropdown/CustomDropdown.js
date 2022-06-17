import PropTypes from 'prop-types';
import { useField } from 'formik';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

function CustomDropdown({ ...props }) {
  const [field, meta] = useField(props);
  const cities = ['Ahmedabad', 'Surat', 'Vadodra', 'Mumbai', 'Chennai'];

  return (
    <FormControl
      variant="standard"
      fullWidth
      error={Boolean(meta.touched && meta.error)}
      sx={{ mb: 3 }}
    >
      <InputLabel id={props.name}>
        {props.title} {props.requiredmsg}
      </InputLabel>
      <Select labelId="select-city" {...props} {...field}>
        <MenuItem value="">
          <em>Please select your city</em>
        </MenuItem>
        {cities.map((city) => (
          <MenuItem value={city} key={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && (
        <FormHelperText name={props.name}>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}
CustomDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  requiredmsg: PropTypes.string.isRequired,
};
export default CustomDropdown;
