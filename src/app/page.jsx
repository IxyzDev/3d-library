'use  client';

import NavBar from '@/components/navbar/NavBar';
import Carousel from '@/components/Carousel';

export default function Home() {
  const imageSlides = [
    { id: '1', url: '/assets/img/1.jpg', alt: 'Description of image 1' },
    { id: '2', url: '/assets/img/2.jpg', alt: 'Description of image 2' },
    { id: '3', url: '/assets/img/3.jpg', alt: 'Description of image 3' },
    // Add more images as needed
  ];

  return (
    <>
      <NavBar />
      <main>
        <Carousel slides={imageSlides} />
      </main>
    </>
  );
}
