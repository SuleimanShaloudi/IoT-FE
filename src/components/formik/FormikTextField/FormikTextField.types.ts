export interface FormikTextFieldProps {
  setFieldValue: any;
  setFieldTouched: any;
  name: string;
  value: string;
  error: string | undefined;
  className: any;
  FormControlStyle: any;
  autoComplete: string;
  margin: "none" | "dense" | "normal";
  placeholder: string;
}

export type FormikTextFieldPropsType = FormikTextFieldProps;
