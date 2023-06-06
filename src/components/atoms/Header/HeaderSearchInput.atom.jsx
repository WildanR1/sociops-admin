const HeaderSearchInput = () => {
  return (
    <div className='md:flex hidden pl-8'>
      <input
        type='text'
        placeholder='Cari'
        className='input input-bordered bg-gray-100 rounded-2xl w-[286px] h-12'
      />
    </div>
  );
};

export default HeaderSearchInput;
