import { Tag } from './Tag';
import { tags } from '@/constants/tags';

export const Tags = () => {
  return (
    <>
      {tags.map(({ label, bgColor }, idx) => (
        <Tag key={idx} label={label} bgColor={bgColor} />
      ))}
    </>
  );
};
