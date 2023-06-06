import { Tag } from '@/components/Tag';
import { Card } from '@/components/Card';

const Home = () => {
  return (
    <main className='w-full'>
      {/* Todo Labels */}
      <div className='flex flex-col justify-center'>
        <div className='mt-[45px] px-3 md:px-6'>
          <div className='flex items-center justify-between max-[290px]:flex-wrap max-[290px]:gap-y-2'>
            <Tag label='work' bgColor='bg-[#685aff]' />
            <Tag label='study' bgColor='bg-[#0088ff]' />
            <Tag label='entertainment' bgColor='bg-[#ff6060]' />
            <Tag label='family' bgColor='bg-[#26ff00]' />
          </div>
        </div>
        <div className='mt-[35px] px-4 md:px-7'>
          <div className='flex flex-col items-center space-y-7'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
