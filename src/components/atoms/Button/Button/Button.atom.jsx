const Button = ({ onClick, text, variant, size, type, width, fontSize }) => {
  if (variant) {
    switch (variant) {
      case "primary-600":
        variant =
          "bg-primary-600 hover:bg-primary-700 duration-300 ease-in-out";
        break;
      case "primary-500":
        variant =
          "bg-primary-500 hover:bg-primary-600 duration-300 ease-in-out";
        break;
      case "error-600":
        variant = "bg-error-600 hover:bg-error-700 duration-300 ease-in-out";
        break;
      case "error-500":
        variant = "bg-primary-500 hover:bg-error-600 duration-300 ease-in-out";
        break;
      case "success-600":
        variant =
          "bg-success-600 hover:bg-primary-700 duration-300 ease-in-out";
        break;
      case "success-500":
        variant =
          "bg-success-600 hover:bg-primary-700 duration-300 ease-in-out";
        break;
      case "warning-600":
        variant =
          "bg-warning-600 hover:bg-primary-700 duration-300 ease-in-out";
        break;
      case "warning-500":
        variant =
          "bg-warning-500 hover:bg-primary-700 duration-300 ease-in-out";
        break;
      default:
        variant = "bg-[#98A2B3]";
        break;
    }
  }

  if (size) {
    switch (size) {
      case "large":
        size = "py-6 px-7";
        break;
      case "medium":
        size = "py-3 px-7";
        break;
      default:
        size = "p-4";
        break;
    }
  }

  if (width) {
    switch (width) {
      case "full":
        width = "w-full";
        break;
      default:
        width = "w-52";
        break;
    }
  }

  if (fontSize) {
    switch (fontSize) {
      case "large":
        fontSize = "text-[22px]";
        break;
      case "medium":
        fontSize = "text-sm";
        break;
    }
  }
  return (
    <button
      className={`${variant} ${size} ${width} ${fontSize} capitalize rounded-[72px] text-white text-xl`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
