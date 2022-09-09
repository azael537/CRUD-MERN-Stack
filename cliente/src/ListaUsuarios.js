
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UsuarioIndividual from './UsuarioIndividual';

function ListaUsuarios(){

    const [datausuarios, setdatausuarios] = useState([]);
    
    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res =>{
            console.log(res.data);
            setdatausuarios(res.data);
        }).catch(err =>{
            console.log(err);
        })

        // axios.get('api/usuario/obtenerusuarios')
        //     .then(response => {
        //         // Obtenemos los datos
        //         console.log("hola");
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     })
    }, [])

    //Mapear lista usuarios en objeto usuario
    const listausuarios = datausuarios.map(usuario => {
        return (
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        );
    })

    return (
    <div>
        <h1>Lista Usuarios</h1>
        {listausuarios}
    </div>
    );
}

export default ListaUsuarios;