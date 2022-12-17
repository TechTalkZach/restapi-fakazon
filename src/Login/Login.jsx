import React from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import swal from "sweetalert";

import { InputEmail } from "../../components/InputEmail";
import { InputPassword } from "../../components/InputPassword";

import { loginSchema } from "./loginSchema";
import { TextArea } from "../../components/TextArea";
import { Api } from "../../service/Api";


const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {resolver: yupResolver(loginSchema)}
    );


    // A changer lorsque le login sera terminer
    const postData = async (data) => {

        //Envoie les données à l'API
        const response = await Api.login(data)

        if(response.status === 200){
            //Reset le formulaire
            reset();

            //Alert de confirmation
            swal({
                title: "Vous êtes enregistré",
                icon: "success",
                button: "Accepter"
            })

        } else {
             //Alert de confirmation
             swal({
                title: "Erreur dans la connection",
                icon: "error",
                button: "Accepter"
            })
        }
    }

    return (
        <main>
            <form className="row g-3" onSubmit={ handleSubmit(postData) }>
                <div className="col-12 text-center">
                    <h5>Login</h5>
                    <p>Vous n'avez pas de compte? <a href="#" className="colorlettre text-decoration-none">Créer votre compte ici</a></p>
                </div>
             
                <InputEmail label="Courriel" columnSize="col-12" formControl={register("courriel")} errorMessage={errors.courriel?.message} />
                <InputPassword label="Mot de passe" columnSize="col-6" formControl={register("motDePasse")} errorMessage={errors.motDePasse?.message} />
                <div className="col-12 text-center">
                    <input type="submit" className="btn colorBtn rounded-5 text-white px-5" value={"Login"}/>
                </div>
            </form>
        </main>
    )
}

export default Login;