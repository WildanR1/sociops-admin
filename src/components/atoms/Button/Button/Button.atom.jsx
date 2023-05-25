const Button = ({ onClick, text, variant, size, type, width, fontSize }) => {
  if (variant) {
    switch (variant) {
      case "primary-600":
        variant = "bg-primary-600";
        break;
      case "primary-500":
        variant = "bg-primary-500";
        break;
      case "error-600":
        variant = "bg-error-600";
        break;
      case "error-500":
        variant = "bg-primary-500";
        break;
      case "success-600":
        variant = "bg-success-600";
        break;
      case "success-500":
        variant = "bg-success-600";
        break;
      case "warning-600":
        variant = "bg-warning-600";
        break;
      case "warning-500":
        variant = "bg-warning-500";
        break;
      default:
        variant = "bg-[#98A2B3]";
        break;
    }
  }

  if (size) {
    switch (size) {
      case "large":
        size = "py-6";
        break;
      case "medium":
        size = "py-3 px-7";
        break;
      default:
        size = "";
        break;
    }
  }

  if (width) {
    switch (width) {
      case "full":
        width = "w-full";
        break;
      default:
        width = "";
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
