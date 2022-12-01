import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
// import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router';



const ModifierCellulaire = () => {

  const [query] = useSearchParams();
  const [id, setId] = useState(query.get("id"))
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [categorie, setCategorie] = useState('');
  const [quantite, setQuantite] = useState('');
  const [description, setDescription] = useState('');

  // Navigation apres le POST a l'api
  const navigate = useNavigate();


  const listeCategorie = ["Samsung", "Apple"]
  console.log(categorie)




  // Fonction qui envoie les informations au API
  const postData = () => {
    console.log(nom);
    console.log(prix);
    console.log(categorie);
    console.log(description);

  }

  // Fonction qui envoie les informations au API
  const updateData = async(e) => {
    e.preventDefault()

    const produit = {nom, prix, categorie, quantite}
    const reponse = await CellulaireServices.modifierCellulaire(produit, id)

    if(reponse.status === 200)
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
    <h1 id="titre">Modifier Cellulaire</h1>
    <a href="/">Retour à l'acceuil</a>
    <form>
      <InputText label="Nom" setValue={setNom} value={nom} />
      <InputNumber label="Prix" setValue={setPrix} value={prix} />
      <InputNumber label="Quantité" setValue={setQuantite} value={quantite} />
      <InputSelect label="Catégorie" options={listeCategorie} setValue={setCategorie} value={categorie} />
      <button className='btn btn-info' onClick={updateData} >Modifier</button>
    </form>
  </div>

    
  )
}
export default ModifierCellulaire