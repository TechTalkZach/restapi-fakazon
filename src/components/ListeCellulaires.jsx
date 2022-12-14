import React from 'react'
import CellulaireServices from '../services/CellulaireServices';

// ds
const ListeCellulaires = () => {

    // var cellulaires = [
    //     {
    //         "id" : "1",
    //         "nom" : "Samsung S22",
    //         "categorie" : "Samsung",
    //         "quantite" : "23",
    //         "prix" : "800"

    //     },
    //     {
    //         "id" : "2",
    //         "nom" : "Samsung S22",
    //         "categorie" : "Samsung",
    //         "quantite" : "23",
    //         "prix" : "800"

    //     },
    //     {
    //         "id" : "3",
    //         "nom" : "Samsung S22",
    //         "categorie" : "Samsung",
    //         "quantite" : "23",
    //         "prix" : "800"

    //     },

    // ]

     const [cellulaire, setCellulaire] = useState([]);

     const getData = async ()=> {
        const response = await CellulaireServics.getCellulaire()

        if(response.status == 200) {
            const data = response.data
            setCellulaire(data)
        }
     }

     const deleteItem = async (idCellulaire)=> {
        const response = await CellulaireServices.deleteCellulaire(idCellulaire)

        if(response.status === 200) 
           getData()
     }


    const showData = ()=>{
        if(cellulaires.length === 0)
            return <p>Aucun cellulaire dans la base de données</p>

        return cellulaires.map(cellulaire =>{
            const {id, nom, categorie, quantite, prix} = cellulaire
            const searchParam = new URLSearchParams({id, nom, categorie, quantite, prix})

            return (
                <tr key = {id}>
                    <td>{id}</td>
                    <td>{nom} </td>   
                    <td>{categorie}</td>
                    <td>{quantite}</td>
                    <td>{prix}</td>
                    <td>
                        {/* onClick={ () => this.modifierCellulaire(cellulaire.id)} */}
                        <a href={"modifier?" + searchParam.toString()}><button className="btn btn-info">Modifier </button></a>
                        {/* onClick={ () => this.supprimerCellulaire(employee.id)} */}
                        <button style={{marginLeft: "10px"}}  className="btn btn-danger" onClick={()=> deleteItem(cellulaire.id)}>Supprimer</button>
                    </td>
                </tr>
            )
        })
            

    }

    useEffect(()=>{
        getData()
    }, [])





  return (
    <div>
        <h2 className="text-center">Liste des Cellulaires</h2>
        <div className = "row">
        {/* OnClick ajouterCellulaire() */}
        <a href="/ajouter"><button className="btn btn-primary"> Ajouter Cellulaire</button></a>
        </div>
        <br></br>
        <div className = "row">
        <table className = "table table-striped table-bordered">
            <thead>
                <tr>
                    <th> ID</th>
                    <th> Nom</th>
                    <th> Categorie</th>
                    <th> Qte</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>{showData()}</tbody>
        </table>
        </div>
    </div>

  )
}

export default ListeCellulaires