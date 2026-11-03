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

export default function Sesi16Content() {
  const sesi16Slides = [
    <Slide1 key="s16-1" />,
    <Slide2 key="s16-2" />,
    <Slide3 key="s16-3" />,
    <Slide4 key="s16-4" />,
    <Slide5 key="s16-5" />,
    <Slide6 key="s16-6" />,
    <Slide7 key="s16-7" />,
    <Slide8 key="s16-8" />,
    <Slide9 key="s16-9" />,
    <Slide10 key="s16-10" />,
  ];

  return (
    <SlideEngine
      slides={sesi16Slides}
      currentPath="/socioecopreneur/sesi-16"
      currentPageTitle="Sesi 16"
    />
  );
}