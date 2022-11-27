import axios from 'axios';

// AXIOS pour les appels API
// C'est installer dans le package.json donc fait npm install


// Ici le URL doit changer
const CELLULAIRE_API_BASE_URL = "http://localhost:8080/fakazonapi";

class CellulaireService {
    
    getCellulaire(){
        return axios.get(CELLULAIRE_API_BASE_URL);
    }

    ajouterCellulaire(cellulaire){
        return axios.post(CELLULAIRE_API_BASE_URL, cellulaire);
    }

    getCellulaireById(cellulaireId){
        return axios.get(CELLULAIRE_API_BASE_URL + '/' + cellulaireId);
    }

    modifierCellulaire(cellulaire, cellulaireId){
        return axios.put(CELLULAIRE_API_BASE_URL + '/' + cellulaireId, cellulaire);
    }

    deleteCellulaire(cellulaireId){
        return axios.delete(CELLULAIRE_API_BASE_URL + '/' + cellulaireId);
    }
}

export default new CellulaireService();