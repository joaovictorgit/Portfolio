import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di';

import '../styles/components/technologies.sass';

const technologiesType = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 />, description: 'Construção de blocos de texto, imagens e vídeos em containers.'},
  { id: 'css', name: 'CSS3', icon: <DiCss3 />, description: 'Estilização de componentes, responsividade, criação de efeitos.'},
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge />, description: 'Criação de eventos em componentes, alteração em sua estrutura.'},
  { id: 'node', name: 'Node.js', icon: <DiNodejsSmall />, description: 'Criação de aplicações back-end com interação com banco de dados.'},
  { id: 'mysql', name: 'MySql', icon: <DiMysql />, description: 'Desenvolvimento e manipulação do banco de dados(CREATE, READT, UPDATE, DELETE).'},
  { id: 'react', name: 'React', icon: <DiReact />, description: 'Desenvolvimento de aplicações Web e em dispositivos móveis.'},
];

function Technologies() {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologiesType.map((tech) => (
          <div className='technology-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies