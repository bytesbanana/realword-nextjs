import React from 'react';
import Link from 'next/link';

const response = {
  tags: ['welcome', 'implementations', 'codebaseShow', 'introduction'],
};

const PopularTags = () => {
  return (
    <div className='px-4 py-2 mx-4 bg-gray-200 border border-gray-200 w-[255px] h-fit'>
      <span className='text-sm'>Popular tags</span>
      <div className='flex flex-wrap gap-1 py-4'>
        {response.tags.map((t) => (
          <Link href='/' key={t}>
            <a className='px-3 py-1 text-xs text-white bg-gray-500 rounded-full'>
              {t}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
