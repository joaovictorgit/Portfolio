import React from 'react'
import Avatar from '../assets/perfil.jpg';
import SocialNetworks from './SocialNetworks';
import '../styles/components/sidebar.sass';
import Information from './Information';
import Curriculo from '../assets/Meu_Curriculo.pdf';

function Sidebar() {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt='Joao Victor' />
      <p className='title'>Desenvolvedor</p>
      <SocialNetworks />
      <Information />
      <a href={Curriculo} className='btn'>Dowload currículo</a>
    </aside>
  )
}

export default Sidebar