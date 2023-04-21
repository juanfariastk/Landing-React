import React from 'react';
import { MenNav } from './components/MenNav';
import { HeroSec } from './components/HeroSec';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { SectionOne } from './components/SectionOne';
import { ButtonMenu } from './components/ButtonMenu';


function App() {
  return (
    <>
      <header>
        <ButtonMenu/>
        <MenNav/>
      </header>
      <section>
        <HeroSec/>
      </section>
      <section>
        <SectionOne/>
      </section>
    </>

  );
}

export default App;
