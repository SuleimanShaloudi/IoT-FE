import { useEffect, useCallback } from "react";
import { useFormikContext } from "formik";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { AutoSubmitProps } from "./AutoSubmit.types";

export const AutoSave = (props: AutoSubmitProps) => {
  const { debounceMs } = props;
  const formik = useFormikContext();
  const debouncedSubmit = useCallback(
    AwesomeDebouncePromise(formik.submitForm, debounceMs),
    [formik.submitForm, debounceMs]
  );
  useEffect(() => {
    debouncedSubmit();
  }, [debouncedSubmit, formik.values]);

  return null;
};
