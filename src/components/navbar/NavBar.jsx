import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  return (
    <header className="navbar">
      <div className=" flex h-14 px-8 items-center justify-between">
        <div className="items-center">
          <Link href="/">
            <div className="flex font-medium items-center  ">
              <Image
                width={30}
                height={30}
                alt="Logo"
                src="/assets/image.png"
                draggable="false"
                className="object-contain"
              />
              <span className="ml-3 text-xl">3Dverse</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex  md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	 flex-wrap items-center justify-center">
          <a href="/" className="mr-5 hover:text-gray-900">
            Visitar
          </a>
          <a href="/" className="mr-5 hover:text-gray-900">
            Novedades
          </a>
          <a href="/" className="mr-5 hover:text-gray-900">
            Noticias
          </a>
          <a href="/" className="mr-5 hover:text-gray-900">
            Contacto
          </a>
        </nav>
        <div className="flex ">
          <button type="button" className="bg-black border-0 py-1 px-3 rounded">
            Button
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
