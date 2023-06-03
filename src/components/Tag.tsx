type TagProps = {
  label: string;
  bgColor: string;
};

export const Tag = ({ label, bgColor }: TagProps) => {
  return (
    <div className='flex items-center space-x-2'>
      <div className={`${bgColor} h-6 w-6 rounded-full`} />
      <span>{label}</span>
    </div>
  );
};
