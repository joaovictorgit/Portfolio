import {DiReact, DiJava} from 'react-icons/di';
import '../styles/components/listprojects.sass';

const listProjects = [
    {id: 'reactjs', name: 'Pokedex', icon: <DiReact />, link: 'https://github.com/joaovictorgit/pokedex', description: 'Aplicação desenvolvida em React JS e styled-components'},
    {id: 'reactnative', name: 'Music Player', icon: <DiReact />, link: 'https://github.com/joaovictorgit/Player_Music', description: 'Aplicação desenvolvida em React Native com TypeScript'},
    {id: 'java', name: 'Drink Water', icon: <DiJava />, link: 'https://github.com/joaovictorgit/beber_agua', description: 'Aplicação de dispositivo móvel desenvolda em Java'},
];

function ListProjects() {
  return (
    <section className='list-container'>
        <div className='list-grid'>
            {listProjects.map((list) => (
            <div className='list-card' id={list.id} key={list.id}>
                {list.icon}
                <div className='list-info'>
                    <h3><a href={list.link}>{list.name}</a></h3>
                    <p>{list.description}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default ListProjects
