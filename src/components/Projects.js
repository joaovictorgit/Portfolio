import React from 'react'
import ListProjects from './ListProjects'

function Projects() {
  return (
    <section className='projects-container'>
      <h2>Projetos</h2>
      <p>
        A seguir encontra-se uma lista de algumas aplicações desenvolvidas por mim e um link para acessar 
        meu repositório com mais projetos disponíveis.
      </p>
      <ListProjects />
      <a href='https://github.com/joaovictorgit' className='btn'>
        Ver Projetos
      </a>
    </section>
  )
}

export default Projects