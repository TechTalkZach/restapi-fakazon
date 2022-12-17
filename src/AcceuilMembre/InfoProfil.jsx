import React, {useState} from 'react'
import { Button } from 'react-bootstrap';

const membres = [
    {
        "idMembre": 1,
        "nom": "Gomez",
        "prenom": "Juana",
        "detailProfil": null,
        "sexe": "M",
        "grandeur": null,
        "dateDeNaissance": "1994-04-19",
        "estVerifie": null,
        "idSituationFamiliale": null,
        "idInteret": null,
        "photoProfil": "https://pyxis.nymag.com/v1/imgs/2f7/4be/9ddec36996ebcea2a389ad5c8a4272a33a-18-ayesha-curry.rsquare.w700.jpg"

    },
    // {
    //     "idMembre": 2,
    //     "nom": "Gomez",
    //     "prenom": "Juana",
    //     "detailProfil": null,
    //     "sexe": "M",
    //     "grandeur": null,
    //     "dateDeNaissance": "1994-04-19",
    //     "estVerifie": null,
    //     "idSituationFamiliale": null,
    //     "idInteret": null,
    //     "photoProfil": "https://pyxis.nymag.com/v1/imgs/2f7/4be/9ddec36996ebcea2a389ad5c8a4272a33a-18-ayesha-curry.rsquare.w700.jpg"

    // },
    // {
    //     "idMembre": 3,
    //     "nom": "Gomez",
    //     "prenom": "Juana",
    //     "detailProfil": null,
    //     "sexe": "M",
    //     "grandeur": null,
    //     "dateDeNaissance": "1994-04-19",
    //     "estVerifie": null,
    //     "idSituationFamiliale": null,
    //     "idInteret": null,
    //     "photoProfil": "https://pyxis.nymag.com/v1/imgs/2f7/4be/9ddec36996ebcea2a389ad5c8a4272a33a-18-ayesha-curry.rsquare.w700.jpg"

    // },
    // {
    //     "idMembre": 4,
    //     "nom": "Paris",
    //     "prenom": "Alexandra",
    //     "detailProfil": null,
    //     "sexe": "M",
    //     "grandeur": null,
    //     "dateDeNaissance": "1994-04-19",
    //     "estVerifie": null,
    //     "idSituationFamiliale": null,
    //     "idInteret": null,
    //     "photoProfil": "https://pyxis.nymag.com/v1/imgs/2f7/4be/9ddec36996ebcea2a389ad5c8a4272a33a-18-ayesha-curry.rsquare.w700.jpg"

    // }
];


    // Fonction AGE        
    var date = membres.dateDeNaissance;
    function age(date){
       const ageDifMs = Date.now() - new Date(date).getTime();
       const ageDate = new Date(ageDifMs);
       return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    console.log(age(date))

const InfoProfil = (idMembre, prenom, nom, sexe, dateDeNaissance, photoProfil) => {
      
   
  return (
    <>
     <div className='upper-container'>
                          <div className='image-container'>
                              <img src={photoProfil} className="avatar" alt="photo profil" height="200px" width="200px" />
                          </div> 
                         </div>
                         <div className='lower-container'>
                           <h2> {idMembre}  {prenom}   {nom} </h2><h3> {sexe} </h3><h4>{age(dateDeNaissance)}</h4>
                          
                          <div>
                            <Button variant="primary">Next</Button>
                          </div>
                            <Button variant="danger">J'aime pas</Button>
                             <Button variant="success">J'aime</Button> 
                            </div>
    </>
  )
}

export default InfoProfil