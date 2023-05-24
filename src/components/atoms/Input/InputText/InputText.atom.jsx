const InputText = ({ onChange, value, name, placeholder, type }) => {
  return (
    <input
      className='px-8 py-6 placeholder:capitalize rounded-[72px] text-base border-2 border-primary-300 bg-primary-700 placeholder:text-white text-white'
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputText;
