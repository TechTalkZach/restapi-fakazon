import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
// import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router';



const ModifierCellulaire = () => {

  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [categorie, setCategorie] = useState('');
  const [quantite, setQuantite] = useState('');
  const [description, setDescription] = useState('');

  // Navigation apres le POST a l'api
  const navigate = useNavigate();


  // Fonction qui envoie les informations au API
  const postData = () => {
    console.log(nom);
    console.log(prix);
    console.log(categorie);
    console.log(description);

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
      <h1 id="titre2">Modifier Cellulaire</h1>
      <Form className='create-form'>
      <Form.Field>
        <label>Nom</label>
        <input placeholder='Nom'  onChange={(e) => setNom(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Prix</label>
        <input placeholder='Prix' onChange={(e) => setPrix(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Catégorie</label>
        <input placeholder='Catégorie' onChange={(e) => setCategorie(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label >Description</label>
        <input id="description" placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
      </Form.Field>
      
      <Button onClick={postData} type='submit'>Modifier</Button>
    </Form>
    </div>
    
  )
}
export default ModifierCellulaire