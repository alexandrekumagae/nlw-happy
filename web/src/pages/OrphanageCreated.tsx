import React from "react";
import { Link } from 'react-router-dom'

import successImg from '../images/success.svg';

import '../styles/pages/orphanage-created.css';

export default function OrphangeCreated() {
  return (
    <div id="page-orphanage-created">
      <div className="content-column">
        <div className="content">
          <h1>Ebaaa!</h1>
          <h2>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</h2>
          <Link to="/app" className="green-button">Voltar para o mapa</Link>
        </div>
      </div>
      <div className="image-column">
        <img src={successImg} alt="Enviado com sucesso!"/>
      </div>
    </div>
  );
}