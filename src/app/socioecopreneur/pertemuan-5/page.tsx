'use client';

import SlideEngine from '@/app/socioecopreneur/components/SlideEngine';
import Slide1Cover from './Slide1Cover';
import Slide2DualBottomLine from './Slide2DualBottomLine';
import Slide3SelfSustaining from './Slide3SelfSustaining';
import Slide4RevenueStreams from './Slide4RevenueStreams';
import Slide5SocialCostStructure from './Slide5SocialCostStructure';
import Slide6BreakEvenPoint from './Slide6BreakEvenPoint';
import Slide7PitchDeckIntegration from './Slide7PitchDeckIntegration';
import Slide8StudiKasusSimulasi from './Slide8StudiKasusSimulasi';
import Slide9ActCountThinkFinance from './Slide9ActCountThinkFinance';
import Slide10TugasIndividu from './Slide10TugasIndividu';
import Slide11TugasKelompok from './Slide11TugasKelompok';

export default function Pertemuan5() {
  const pertemuan5Slides = [
    <Slide1Cover key="p5-1" />,
    <Slide2DualBottomLine key="p5-2" />,
    <Slide3SelfSustaining key="p5-3" />,
    <Slide4RevenueStreams key="p5-4" />,
    <Slide5SocialCostStructure key="p5-5" />,
    <Slide6BreakEvenPoint key="p5-6" />,
    <Slide7PitchDeckIntegration key="p5-7" />,
    <Slide8StudiKasusSimulasi key="p5-8" />,
    <Slide9ActCountThinkFinance key="p5-9" />,
    <Slide10TugasIndividu key="p5-10" />,
    <Slide11TugasKelompok key="p5-11" />,
  ];

  return (
    <SlideEngine
      slides={pertemuan5Slides}
      currentPath="/socioecopreneur/pertemuan-5"
      currentPageTitle="Pertemuan 5"
    />
  );
}