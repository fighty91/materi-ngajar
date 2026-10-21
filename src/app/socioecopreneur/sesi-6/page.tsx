'use client';

import SlideEngine from '@/app/socioecopreneur/components/SlideEngine';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';

export default function Sesi6Content() {
  const sesi6Slides = [
    <Slide1 key="s6-1" />,
    <Slide2 key="s6-2" />,
    <Slide3 key="s6-3" />,
    <Slide4 key="s6-4" />,
    <Slide5 key="s6-5" />,
    <Slide6 key="s6-6" />,
    <Slide7 key="s6-7" />,
    <Slide8 key="s6-8" />,
    <Slide9 key="s6-9" />,
    <Slide10 key="s6-10" />,
  ];

  return (
    <SlideEngine
      slides={sesi6Slides}
      currentPath="/socioecopreneur/sesi-6"
      currentPageTitle="Sesi 6"
    />
  );
}