import { ErrorMessage } from "formik";
import Select from "react-select";

const SelectInput = ({ onChange, options, value, name }: any) => {
  const defaultValue = (options: any, value: any) => {
    // return options ? options.find((option: any) => option.value === value) : "";
    return options.find((option: any) => option.value === value) || "";
  };
  return (
    <>
      <Select
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        options={options}
      />

      <ErrorMessage name={name} component="div" className="text-danger" />
    </>
  );
};

export default SelectInput;
