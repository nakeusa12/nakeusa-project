const GetErrorMessage = (type) => {
  switch (type) {
    case "minLength":
      return "Jumlah karakter tidak memenuhi minimim.";
    case "validate":
      return "Format tidak sesuai";
    case "required":
    default:
      return "Mohon mengisi field.";
  }
};

const FormError = ({ error }) => {
  if (!error) {
    return <></>;
  }

  const { type } = error;
  const message = GetErrorMessage(type);

  return <small className="text-red-500">{message}</small>;
};

export default FormError;
