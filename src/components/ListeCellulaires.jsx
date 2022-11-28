import React from 'react'

const ListeCellulaires = () => {

    var cellulaires = [
        {
            "id" : "1",
            "nom" : "Samsung S22",
            "categorie" : "Samsung",
            "quantite" : "23",
            "prix" : "800"

        },
        {
            "id" : "2",
            "nom" : "Samsung S22",
            "categorie" : "Samsung",
            "quantite" : "23",
            "prix" : "800"

        },
        {
            "id" : "3",
            "nom" : "Samsung S22",
            "categorie" : "Samsung",
            "quantite" : "23",
            "prix" : "800"

        },

    ]

    // const [cellulaire, setCellulaire] = useState([]);



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
                            <tbody>
                                {
                                    cellulaires.map(
                                        cellulaire => 
                                        <tr key = {cellulaire.id}>
                                             <td> { cellulaire.nom} </td>   
                                             <td> {cellulaire.categorie}</td>
                                             <td> {cellulaire.quantite}</td>
                                             <td> {cellulaire.prix}</td>
                                             <td>
                                                 {/* onClick={ () => this.modifierCellulaire(cellulaire.id)} */}
                                                 <a href="/modifier"><button className="btn btn-info">Modifier </button></a>
                                                 {/* onClick={ () => this.supprimerCellulaire(employee.id)} */}
                                                 <button style={{marginLeft: "10px"}}  className="btn btn-danger">Supprimer</button>
                                                
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
  )
}

export default ListeCellulaires