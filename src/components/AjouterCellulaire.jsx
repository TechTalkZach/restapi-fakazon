import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
// import { Form } from 'react-router-dom';
import { useNavigate} from 'react-router';





// Ajouter cellulaire
const AjouterCellulaire = () => {

  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [categorie, setCategorie] = useState('');
  const [quantite, setQuantite] = useState('');
  const [description, setDescription] = useState('');

  // Navigation apres le POST a l'api
  const navigate = useNavigate();

  const listeCategorie = ["Samsung", "Aplle"]


   // Fonction qui envoie les informations au API
   const postData = async (e)=>{
    e.preventDefault()
    const response = await CellulaireServices.ajouterCellulaire({nom, prix, categorie, quantite})

    if(response.status === 200)
      navigate("/")

  }


// A bien configurer , le History Push nous envoye a la bonne page apres le changement a l'API
//   const postData = () => {
//     axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
//         nom,
//         prix,
//         categoire,
//         description
//     }).then(() => {
//  navigate('/');
//})
// }

  return (
    <div>
      <h1 id="titre">Ajouter Cellulaire</h1>
      <a href="/">Retour à l'acceuil</a>
      <form>
        <InputText label="Nom" setValue={setNom} value={nom} />
        <InputNumber label="Prix" setValue={setPrix} value={prix} />
        <InputNumber label="Quantité" setValue={setQuantite} value={quantite} />
        <InputSelect label="Catégorie" options={listeCategorie} setValue={setCategorie} value={categorie} />
        <button className='btn btn-info' onClick={postData} >Ajouter</button>
      </form>
    </div>

    
  )
}

export default AjouterCellulaire

// 
// var QtyPicker = require('react-quantity-picker');
// var value = 1 ;
// <QtyPicker
// value = { value }
// onChange = {function (newValue) { value = newValue } } />