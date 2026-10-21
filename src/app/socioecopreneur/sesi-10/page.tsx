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

export default function Sesi10Content() {
  const sesi10Slides = [
    <Slide1 key="s10-1" />,
    <Slide2 key="s10-2" />,
    <Slide3 key="s10-3" />,
    <Slide4 key="s10-4" />,
    <Slide5 key="s10-5" />,
    <Slide6 key="s10-6" />,
    <Slide7 key="s10-7" />,
    <Slide8 key="s10-8" />,
    <Slide9 key="s10-9" />,
    <Slide10 key="s10-10" />,
  ];

  return (
    <SlideEngine
      slides={sesi10Slides}
      currentPath="/socioecopreneur/sesi-10"
      currentPageTitle="Sesi 10"
    />
  );
}