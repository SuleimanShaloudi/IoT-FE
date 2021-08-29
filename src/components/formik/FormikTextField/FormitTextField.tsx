import { TextField, FormHelperText, FormControl } from "@material-ui/core";
import { FormikTextFieldPropsType } from "./FormikTextField.types";
import { useTextFieldStyle } from "./TextField.style";

const FormikTextField = (props: FormikTextFieldPropsType) => {
  const classes = useTextFieldStyle();
  const {
    setFieldValue,
    setFieldTouched,
    name,
    value,
    error,
    className,
    FormControlStyle,
    autoComplete,
    margin,
    placeholder,
  } = props;

  const handleChange = (e: any): void => {
    setFieldValue(name, e.target.value);
    setFieldTouched(name, true, false);
  };

  return (
    <FormControl error={!!error} className={FormControlStyle}>
      <TextField
        className={className}
        variant="outlined"
        value={value}
        onChange={handleChange}
        type={"text"}
        autoComplete={autoComplete}
        placeholder={placeholder}
        margin={margin}
      />
      {error && (
        <FormHelperText className={classes.FormHelperText} error={true}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FormikTextField;
