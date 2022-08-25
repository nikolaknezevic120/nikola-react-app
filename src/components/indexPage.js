import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import profileImage from './images/profile-image/profile-image.jpg';
import './style/index-page/index-page.css';

export default function IndexPage() {
  
  const [textOpen, setTextOpen] = useState(false);
  
  return (
    <Container fluid>
      <div className='index-body'>
        <div className='index-elements'>
          <h1 id='welcome'> DOBRO DOšLI </h1>
          <img id='index-profile-img' src={profileImage} alt=""/>
          <h3 id='hello'>
            Ja sam Nikola, ovu aplikaciju sam napravio kako bih Vam prezentirao sebe i svoj rad.
          </h3>

          <div className='index-page-text'>
            <p id='describe-main'>
              U ovoj aplikaciji se nalaze moje dvije aplikacije koje sam izradio i neki od WordPress projekata na 
              kojima sam radio.
            </p>

            <div className='describe-about-div'>
              <p id='describe-about'>
                <button id='openBtn' 
                  onClick={() => setTextOpen(!textOpen)}>
                  <h3>O zadatcima</h3>
                </button>
              </p>

              {textOpen && <p id='describe'>
                <b>Follow the card</b> je zamišljena aplikacija u koju korisnik može unositi svoje bankovne kartice.<br />
                Na log in stranici aplikacije korisnik se može ulogirati na već kreirani račun user name-om nikola65, a password 
                je nebitan. Ako se korisnik odluči za kreiranje novog računa, mora ispuniti sva polja. Password i retype password 
                polja moraju imati isti unos.<br />
                Bilo kako da se korisnik ulogira, na listi kartica će imati već jednu karticu čije podatke (osim pina) može 
                urediti. Korisnik može dodavati i brisati kartice. Kod dodavanja kartice, pin se automatski generira kao 
                četveroznamenkasti random broj.<br />
                Budući da nisam radio backend, podatci o korisniku se spremaju u local storage, koji se klikom na button 
                odjavi se, čisti i tako se gube uneseni podatci kao i sve promjene izvršene u listi sa karticama. 
                <a href='https://nikolaknezevic120.github.io/nikola-react-app/#/login' id='link'> Pogledajte aplikaciju.</a>
              </p>}
              {textOpen && <p id='describe'>
                <b>Infinite slider</b> U ovom zadatku se nalaze dva reda fotografija različitih širina, te se klikom na strelicu 
                oba dva reda pomiču lijevo ili desno za širinu posljednje slike u redu. 
                <a href='https://nikolaknezevic120.github.io/nikola-react-app/#/infinite_slider' id='link'> Pogledajte aplikaciju.</a>
              </p>}
              {textOpen && <p id='describe-bottom'>
                <b>WordPress- </b>U aplikaciji se mogu pronaći i poveznice na stranice gdje sam sudjelovao u izradi i opisom sto sam točno na njima 
                radio. Sve stranice tamo navedene su izrađene u WordPressu većinom koristeći Elementor. Popisu WordPress projekata 
                na kojima sam sudjelovao možete pristupiti <a href='https://nikolaknezevic120.github.io/nikola-react-app/#/word-press'>odmah</a>.  
                </p>}
              {textOpen && <p id='describe-bottom'>  
                <b>Ostalo </b>Na mom github profilu se nalaze jos dva projekta koje sam radio na fakultetu za kolegije osnove objektnog 
                programiranja i osnove web programiranja. <a href='https://github.com/nikolaknezevic120?tab=repositories' id='link' target="_blank" rel="noopener noreferrer">
                  Pogledajte ih</a>.<br />               
              </p>}

              {textOpen && 
                <button id='openBtn' 
                  onClick={() => setTextOpen(!textOpen)}>
                <h4>Zatvori</h4>
              </button>              
              }
            </div>

            <p id='describe-bottom-about'>Ako želite saznati tko sam, čime se bavim, gdje i kako sam odrastao... kliknite 
            <a href='https://nikolaknezevic120.github.io/nikola-react-app/#/about' id='link'> o meni</a>.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}