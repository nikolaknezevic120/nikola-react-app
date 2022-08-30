import React from 'react';
import '../style/contact-and-download/download/download.css';
import downFile from '../files-download/infinite-slider.zip';

export default function Downolad() {

      return (
        <div className='download-links'>
          <p>Pregledajte kod cijele aplikaciju na <a href="https://github.com/nikolaknezevic120/nikola-react-app"
            target="_blank" rel="noreferrer"> linku!</a></p>
          <p>Preuzmite infinite slider (desktop verzija) u .zip datoteci. <a href={downFile} download> Preuzmi!</a></p>
        </div>
      );
    }