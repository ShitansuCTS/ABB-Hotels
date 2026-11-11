"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const Preloader: FC = () => {
  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, 500);

    // cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {active ? (
        <div className='loading-screen' id='loading-screen'>
          <span className='bar top-bar' />
          <span className='bar down-bar' />
          <div className='animation-preloader'>
            <div className='position-relative z-1'>
              <div className='loader-border' />
              <div className='loader-logo position-absolute top-50 start-50 translate-middle tw-z-999'>
                <Image
                  width={56}
                  height={45}
                  className='position-relative tw-z-999'
                  src='/assets/images/abb-hotel/logo-golden.webp'
                  alt='brand'
                />
              </div>
            </div>
            <div className='txt-loading tw-mt-10'>
              {['A', 'B', 'B', ' ', 'H', 'O', 'T', 'E', 'L'].map((letter, index) => (
                <span
                  key={index}
                  data-text-preloader={letter}
                  className='letters-loading'
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Preloader;
