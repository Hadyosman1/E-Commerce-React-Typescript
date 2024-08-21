import { Form, Spinner } from "react-bootstrap";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TProps<TFieldValue extends FieldValues> = {
  register: UseFormRegister<TFieldValue>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  name: Path<TFieldValue>;
  label: string;
  type?: string;
  placeholder: string;
  size?: "sm" | "lg" | undefined;
  isValid?: boolean;
  validMessage?: string | React.ReactNode;
  checkingMessage?: string;
  disabled?: boolean;
};

const FormInput = <TFieldValue extends FieldValues>({
  register,
  error,
  name,
  label,
  type = "text",
  placeholder,
  size = "sm",
  onBlur,
  isValid,
  validMessage,
  checkingMessage,
  disabled,
}: TProps<TFieldValue>) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
    register(name).onBlur(e);
  };

  return (
    <Form.Group className="mb-2">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...register(name)}
        onBlur={onBlurHandler}
        size={size}
        type={type}
        placeholder={placeholder}
        isInvalid={!!error}
        isValid={isValid && !error}
        disabled={disabled}
      />

      {checkingMessage && (
        <Form.Text className="text-light fade-in-out-anim">
          <Spinner size="sm" animation="border" /> {checkingMessage}
        </Form.Text>
      )}
      {isValid && validMessage && (
        <Form.Control.Feedback type="valid">
          {validMessage}
        </Form.Control.Feedback>
      )}
      {!!error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default FormInput;
