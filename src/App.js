import React from 'react';
import './App.css';
import Jose from './jose.jpg';
import { FaExclamationCircle, FaQuestionCircle } from 'react-icons/fa'
import { BiChevronLeft } from 'react-icons/bi'
import { AiOutlineSwitcher } from 'react-icons/ai'



function App() {
  return (
    <div className="container-fluid cover row d-flex mt-3 bg-light">
      
      <div className="left container bg-light">
        <img src={Jose} className='image' alt='jose' />
        <div className='head-center heading'>
          <h1 className='text-center '>Enregistrez</h1>
          <h1>Volre oeuvre</h1>
          <h1>en quelques etapes</h1>
        </div>
        <h2 className='btmhead'>ART <AiOutlineSwitcher></AiOutlineSwitcher> SHORTLIST<span className='six'>®</span></h2>
      </div>
      
      <div className='right container bg-light'>
        <div className='row'>
          
          <div className='container'>
            <h6 className='text-muted'><span><FaExclamationCircle></FaExclamationCircle></span> important</h6>
            <div className='left-border'>
              <p>Remplissez avec <b>precision</b> toutes les sections de ce formulaire et donnez
            le maximum d'informations sur votre ceuvre.
            <br></br>
            Les champs marques d'un <b>asterisque (*)</b> sont obligatoires.
            </p>
            </div>
          </div>

          <div className='container'>
            <h6 className='text-muted'> <FaQuestionCircle></FaQuestionCircle> Besoin d'aide ?</h6>
            <div className='left-border'>
              <p>Nous sommes a <b>votre disposition</b> pour vous conseiller afin d'inscrire
            votre ceuvre a notre catalogue dans les meilleures conditions.
            <br></br>
            Contactez-nous par<b>email,</b>via le <b>chat</b> ou directement par telephone.
            </p>
            </div>
          </div>


          <p className='lastpara'> Si vious n' arrivez pas a remplir l'integralite des champs obligatoires du formulaire, n'hesitez pas a faire <b>une demande d' expertise,
        </b> elle est totalement <b>gratuite.</b></p>
        </div>
        
        <div className='container btnclass'>
          <h6 className='p-3'><BiChevronLeft></BiChevronLeft>RETOUR </h6>
          <button type="button" className='btn'>Renseigner mon aeuvre</button>
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
