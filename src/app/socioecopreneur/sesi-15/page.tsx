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

export default function Sesi15Content() {
  const sesi15Slides = [
    <Slide1 key="s15-1" />,
    <Slide2 key="s15-2" />,
    <Slide3 key="s15-3" />,
    <Slide4 key="s15-4" />,
    <Slide5 key="s15-5" />,
    <Slide6 key="s15-6" />,
    <Slide7 key="s15-7" />,
    <Slide8 key="s15-8" />,
    <Slide9 key="s15-9" />,
    <Slide10 key="s15-10" />,
  ];

  return (
    <SlideEngine
      slides={sesi15Slides}
      currentPath="/socioecopreneur/sesi-15"
      currentPageTitle="Sesi 15"
    />
  );
}