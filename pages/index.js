import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='flex h-[175px] bg-green-500 justify-center shadow-inner '>
        <div className='flex flex-col self-center justify-center space-y-3'>
          <h1 className='text-5xl font-semibold text-center text-white drop-shadow-lg'>
            conduit
          </h1>
          <p className='text-xl text-center text-white drop-shadow-md'>
            A place to shared you knowledge.
          </p>
        </div>
      </div>
      <div className='container p-10 mx-auto'></div>
    </>
  );
}
