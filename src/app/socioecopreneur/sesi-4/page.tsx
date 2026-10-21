'use client';

import SlideEngine from '@/app/socioecopreneur/components/SlideEngine';
import Slide1Cover from './Slide1Cover';
import Slide2MengapaPlanet from './Slide2MengapaPlanet';
import Slide3KearifanLokalPapua from './Slide3KearifanLokalPapua';
import Slide4AncamanEkologis from './Slide4AncamanEkologis';
import Slide5PrinsipEcopreneurship from './Slide5PrinsipEcopreneurship';
import Slide6StudiKasusHijau from './Slide6StudiKasusHijau';
import Slide7IndikatorPlanet from './Slide7IndikatorPlanet';
import Slide8ActCountThinkPlanet from './Slide8ActCountThinkPlanet';
import Slide9IntegrasiPitchDeck from './Slide9IntegrasiPitchDeck';
import Slide10TugasIndividuP4 from './Slide10TugasIndividuP4';
import Slide11TugasKelompokP4 from './Slide11TugasKelompokP4';

export default function Sesi4Content() {
  const sesi4Slides = [
    <Slide1Cover key="p4-1" />,
    <Slide2MengapaPlanet key="p4-2" />,
    <Slide3KearifanLokalPapua key="p4-3" />,
    <Slide4AncamanEkologis key="p4-4" />,
    <Slide5PrinsipEcopreneurship key="p4-5" />,
    <Slide6StudiKasusHijau key="p4-6" />,
    <Slide7IndikatorPlanet key="p4-7" />,
    <Slide8ActCountThinkPlanet key="p4-8" />,
    <Slide9IntegrasiPitchDeck key="p4-9" />,
    <Slide10TugasIndividuP4 key="p4-10" />,
    <Slide11TugasKelompokP4 key="p4-11" />,
  ];

  return (
    <SlideEngine
      slides={sesi4Slides}
      currentPath="/socioecopreneur/sesi-4"
      currentPageTitle="Sesi 4"
    />
  );
}