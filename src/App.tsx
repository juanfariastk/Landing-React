import React from 'react';
import { MenNav } from './components/MenNav';
import { HeroSec } from './components/HeroSec';
import { FormSec } from './components/FormSec';
import { SectionOne } from './components/SectionOne';
import { ButtonMenu } from './components/ButtonMenu';
import {ParaSec} from './components/ParaSec';
import { FootEnd } from './components/FootEnd';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'




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
      <section>
        <ParaSec/>
      </section>
      <section>
        <FormSec/>
      </section>
      <footer>
        <FootEnd/>
      </footer>

    </>

  );
}

export default App;
