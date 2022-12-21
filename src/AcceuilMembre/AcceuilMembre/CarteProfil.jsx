import React, {useState, useEffect} from 'react'
import './CarteProfil.css';
import { Button, ToggleButton } from 'react-bootstrap';
import InfoProfil from './InfoProfil';
import ToggleButtons from '../../components/ToggleButtons';
import { Api } from '../../service/Api';

function CarteProfil(value) {

    const [searchTerm, setSearchTerm] = useState('')


    const [ageSearch, setAgeSearch] = useState('');
    const [sexeSearch, setSexeSearch] = useState('');
    const [radioSexe, setRadioSexe] = useState('M');


    // membres.filter((val)=> {
    //     if(searchTerm = "") {

    //         return val
    //     } else if (val.sexe.toLowerCase().includes(searchTerm.toLowerCase())) {
    //         return val   
    //     }
          
    //  })

    //  <input type={"text"} placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value)}} />

    


      
       const [membres, setMembres] = useState([
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
        {
            "idMembre": 2,
            "nom": "Jeff",
            "prenom": "Abercrombie",
            "detailProfil": null,
            "sexe": "M",
            "grandeur": null,
            "dateDeNaissance": "1980-04-19",
            "estVerifie": null,
            "idSituationFamiliale": null,
            "idInteret": null,
            "photoProfil": "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
        {
            "idMembre": 3,
            "nom": "Silvya",
            "prenom": "Juana",
            "detailProfil": null,
            "sexe": "F",
            "grandeur": null,
            "dateDeNaissance": "1954-04-19",
            "estVerifie": null,
            "idSituationFamiliale": null,
            "idInteret": null,
            "photoProfil": "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600"

        },
        {
            "idMembre": 4,
            "nom": "Paris",
            "prenom": "Alexandra",
            "detailProfil": null,
            "sexe": "M",
            "grandeur": null,
            "dateDeNaissance": "1992-04-19",
            "estVerifie": null,
            "idSituationFamiliale": null,
            "idInteret": null,
            "photoProfil": "https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
        {
            "idMembre": 5,
            "nom": "Marina",
            "prenom": "Juana",
            "detailProfil": null,
            "sexe": "M",
            "grandeur": null,
            "dateDeNaissance": "1994-04-19",
            "estVerifie": null,
            "idSituationFamiliale": null,
            "idInteret": null,
            "photoProfil": "https://pyxis.nymag.com/v1/imgs/2f7/4be/9ddec36996ebcea2a389ad5c8a4272a33a-18-ayesha-curry.rsquare.w700.jpg"

        }
    ],);

    var valSexe = '';

    console.log(value)
    if(value = 1) {
        valSexe = 'M'
    } else if(value = 2) {
        valSexe = 'F'
    }


    // FILTRE
    const filtre_sexe = membres.filter( membre => membre.sexe === valSexe);
    const filtre_age = membres.filter (membre => age(membre.dateDeNaissance) === 28 );
    console.log(filtre_sexe)

    // AGE
    function age(date){
        const ageDifMs = Date.now() - new Date(date).getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
     }
    


    // FETCH
    const [profiles, setProfiles] = useState([]);

    const getData = async () => {
        const response = await Api.getProfiles();

        
        if(response.status == 200) {
            const data = response.data
            setProfiles(data)
        }
        
    }

    useEffect(()=>{
        getData();
    }, [])

    //Remplace membres avec profiles du fetch
    // Bouton Next
    function next(){
      let newList = [...filtre_sexe];   
      console.log(filtre_sexe)
      newList.shift();
      setMembres(newList)
      console.log(membres)
       
    }

    var profilId = 6;
    // Bouton aimer
    const Aimer = async (e) => {
        let newList = [...filtre_age];   
        newList.shift();
        setMembres(newList);
        console.log('idMembreInitiateur : ' + profilId 
        +'   idMembreSecond  : '  + membres[0].idMembre +
         true );
        
        // POST 
        const response = await Api.envoyeAimer(profilId, membres[0].idMembre, true) 

        if(response.status === 200)
        navigate("/")      
    }

    var profilId = 2;

    //Bouton nonAimer
    const nonAimer = async (e) => {
        let newList = [...membres];   
        newList.shift();
        setMembres(newList);
        console.log('idMembreInitiateur : ' + profilId 
                    +'   idMembreSecond  : '  + membres[0].idMembre +
                     false );
        
        // POST    
        const response = await Api.envoyeNonAimer(profilId, membres[0].idMembre, false) 

        if(response.status === 200)
        navigate("/")      
        
    }

    // Fonction AGE        
    var date = membres.dateDeNaissance;


    // Error Handling si il a plus d'utilisateurs a demontrer
    if(membres.length === 0)
     return (
       <div className='Card'>     
        <> 
           <div className='upper-container'>
             <div className='image-container'>
                <h2>Bravo , vous avez vue tout le monde. S.V.P retourner plus tard</h2>    
             </div> 
            </div>
            <div className='lower-container'>
            <Button variant="primary" size='lg' href='/profil'>Mon profil</Button>
            
            </div>                                  
               
        </>   
       </div> 
     )
     // Carte avec profiles
     
      return (
        <>
        <ToggleButtons value={value} />  
          <div className='Card'>   
        
                     <> 
                        <div className='upper-container'>
                          <div className='image-container'>
                              <img src={membres[0].photoProfil} className="avatar" alt="photo profil" height="200px" width="200px" />
                          </div> 
                         </div>
                         <div className='lower-container'>
                           <h2> {membres[0].idMembre}  {membres[0].prenom}   {membres[0].nom} </h2><h3> {membres[0].sexe} </h3><h4>{age(membres[0].dateDeNaissance)}</h4>
                          <div>                           
                            <Button variant="primary" size='lg' onClick={next} >Next</Button>
                          </div>
                            <Button variant="danger" onClick={nonAimer} size='lg'>J'aime pas</Button>
                             <Button variant="success" onClick={Aimer}  size='lg'>J'aime</Button> 
                            </div>
                        </>           
        </div> 
        </>
        
    )
 }


export default CarteProfil;