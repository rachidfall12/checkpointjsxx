import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './App.css'
import Carte from './Components/carte/carte'


const firstName = prompt("Dougalal seu tour aytia :");

const isFirstNameProvided = firstName !== null && firstName.trim() !== "";



function App() {
 
  return (
    <div className='rambo'>
       <div>
      <p className='p1'lass>Hello, {isFirstNameProvided ? firstName : "there"}!</p>
      </div>
        <div>
       <Carte />
       </div>
       <div>
      {isFirstNameProvided && (
        <img  width={'250px'} src="https://i.pinimg.com/564x/8d/17/10/8d1710fe39eccfe75ab40b7ef9ac99af.jpg" alt="Votre Image" />
      )}
        </div>
    </div>
  );
}
export default App



