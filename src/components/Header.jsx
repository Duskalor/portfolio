import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=''>
      <div className='max-w-screen-xl m-auto flex justify-between p-5 rounded'>
        <a
          href='#'
          className='sm:text-3xl text-xl font-bold text-black flex items-center'
        >
          Duska Dev
        </a>
        <nav className='sm:flex gap-10 hidden'>
          <ul className='sm:flex items-center gap-10 text-slate-500 [&>li]:transition-colors [&>li>a]:duration-300'>
            <li>
              <a href='#Inicio' className='hover:text-Orange font-bold'>
                Inicio
              </a>
            </li>
            <li>
              <a href='#Proyectos' className='hover:text-Orange font-bold'>
                Proyectos
              </a>
            </li>
            <li>
              <a href='#Skills' className='hover:text-Orange font-bold'>
                Skills
              </a>
            </li>
            <li>
              <a href='#Contacto' className='hover:text-Orange font-bold'>
                Contacto
              </a>
            </li>
          </ul>
          <button className='bg-Orange sm:block hidden transition-colors duration-500 px-5 py-2 border-2 border-Orange text-white rounded-lg font-bold tracking-widest hover:bg-black hover:border-black'>
            Contratar
          </button>
        </nav>

        <div
          id='open'
          className='flex sm:hidden cursor-pointer w-10 h-10 items-center justify-center'
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-menu-2'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M4 6l16 0'></path>
            <path d='M4 12l16 0'></path>
            <path d='M4 18l16 0'></path>
          </svg>
        </div>

        {open && (
          <div
            onClick={() => setOpen(false)}
            className='fixed bg-black/50 z-20 inset-0 justify-end flex sm:hidden transition-all duration-1000'
            id='navmobile'
          >
            <section className='w-[60%] bg-white max-h-screen h-full'>
              <div
                className='absolute right-5 top-5 p-2  cursor-pointer'
                id='close'
              >
                <svg
                  onClick={() => setOpen(true)}
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-x'
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M18 6l-12 12'></path>
                  <path d='M6 6l12 12'></path>
                </svg>
              </div>

              <nav
                onClick={(e) => e.stopPropagation()}
                className='sm:hidden flex px-5 py-20 text-2xl h-full'
              >
                <ul className=' w-full flex flex-col items-center gap-5 text-slate-500 [&>li]:transition-colors [&>li>a]:duration-300'>
                  <a
                    onClick={() => setOpen(false)}
                    href='#Inicio'
                    className='hover:text-Orange font-bold w-full flex justify-center cursor-pointer '
                  >
                    Inicio
                  </a>
                  <a
                    onClick={() => setOpen(false)}
                    href='#Proyectos'
                    className='hover:text-Orange font-bold w-full flex justify-center cursor-pointer '
                  >
                    Proyectos
                  </a>

                  <a
                    onClick={() => setOpen(false)}
                    href='#Skills'
                    className='hover:text-Orange font-bold w-full flex justify-center cursor-pointer '
                  >
                    Skills
                  </a>

                  <a
                    onClick={() => setOpen(false)}
                    href='#Contacto'
                    className='hover:text-Orange font-bold w-full flex justify-center cursor-pointer '
                  >
                    Contacto
                  </a>
                </ul>
              </nav>
            </section>
          </div>
        )}
      </div>
    </header>
  );
};
