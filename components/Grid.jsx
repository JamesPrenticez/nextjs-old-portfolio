import React from 'react';
import { data } from '../data';

function Grid() {
  return (
    <div className='w-[60vw] h-[80vh]'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-rows-9 md:grid-rows-5 lg:grid-rows-3 h-full gap-8 rounded-sm'>
        {data.map((project, index) => (
          //Card
          <div
            key={index}
            className='border border-white rounded-sm p-4 cursor-pointer '
          >
            <p className=''>{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;