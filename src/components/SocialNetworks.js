import '../styles/components/socialnetworks.sass';
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedinIn/>, link: 'https://www.instagram.com/joaovictorfelix2001/?hl=pt-br'},
  { name: 'github', icon: <FaGithub />, link: 'https://github.com/joaovictorgit'},
  { name: 'instagram', icon: <FaInstagram />, link: 'https://www.linkedin.com/in/jo%C3%A3o-v-a41a9313b/'},
];

function SocialNetworks() {
  return (
    <section id='social-networks'>
      {socialNetworks.map((network) => (
        <a href={network.link} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks