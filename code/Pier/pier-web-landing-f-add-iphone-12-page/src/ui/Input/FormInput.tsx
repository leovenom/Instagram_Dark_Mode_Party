import { Fragment, InputHTMLAttributes } from "react";
import * as React from "react";
import { useField } from "formik";

import Icon from "../Icon";
import InputMask from "react-input-mask";
import { InputContent, InputStyle, Error } from ".";

import mask from "./mask";

import icons from "../Icon/icons";
import colors from "../theme/colors";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label?: string;
  mask?: keyof typeof mask;
  icon?: keyof typeof icons;
  error?: string;
  value?: string;
  iconColor?: keyof typeof colors;
}

const FormInput: React.FunctionComponent<Props> = ({
  label,
  mask: fieldMask,
  icon,
  error,
  iconColor,
  ...props
}): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <Fragment>
      {/* {label && <Label error={meta.error && meta.touched}>{label}</Label>} */}
      <InputContent>
        <InputMask mask={mask[fieldMask]} {...field} value={field.value.value}>
          <InputStyle
            icon={icon}
            error={meta.error && meta.touched}
            {...props}
          />
        </InputMask>
        {icon && <Icon name={icon} fill={iconColor} size={24} />}
      </InputContent>
      {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </Fragment>
  );
};

export default FormInput;
