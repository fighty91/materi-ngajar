'use client';

import SlideEngine from '@/components/SlideEngine';
import Slide1Cover from './Slide1Cover';
import Slide2Krisis from './Slide2Krisis';
import Slide3Sedotan from './Slide3Sedotan';
import Slide4TripleBottomLine from './Slide4TripleBottomLine';
import Slide5Papua from './Slide5Papua';
import Slide6ActCountThink from './Slide6ActCountThink';
import Slide7ContohUsaha from './Slide7ContohUsaha';
import Slide8Workshop from './Slide8Workshop';
import Slide9TugasWeb from './Slide9TugasWeb';
import Slide10MisiPenutup from './Slide10MisiPenutup';

export default function Pertemuan1() {
  const pertemuan1Slides = [
    <Slide1Cover key="p1-1" />,
    <Slide2Krisis key="p1-2" />,
    <Slide3Sedotan key="p1-3" />,
    <Slide4TripleBottomLine key="p1-4" />,
    <Slide5Papua key="p1-5" />,
    <Slide6ActCountThink key="p1-6" />,
    <Slide7ContohUsaha key="p1-7" />,
    <Slide8Workshop key="p1-8" />,
    <Slide9TugasWeb key="p1-9" />,
    <Slide10MisiPenutup key="p1-10" />,
  ];

  return (
    <SlideEngine
      slides={pertemuan1Slides}
      currentPath="/pertemuan-1"
      currentPageTitle="Pertemuan 1"
    />
  );
}