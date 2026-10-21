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

export default function Sesi7Content() {
  const sesi7Slides = [
    <Slide1 key="s7-1" />,
    <Slide2 key="s7-2" />,
    <Slide3 key="s7-3" />,
    <Slide4 key="s7-4" />,
    <Slide5 key="s7-5" />,
    <Slide6 key="s7-6" />,
    <Slide7 key="s7-7" />,
    <Slide8 key="s7-8" />,
    <Slide9 key="s7-9" />,
    <Slide10 key="s7-10" />,
  ];

  return (
    <SlideEngine
      slides={sesi7Slides}
      currentPath="/socioecopreneur/sesi-7"
      currentPageTitle="Sesi 7"
    />
  );
}