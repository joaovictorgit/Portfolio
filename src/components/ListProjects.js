import { DiReact, DiJava, DiNodejsSmall } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import "../styles/components/listprojects.sass";

const listProjects = [
  {
    id: "reactjs",
    name: "Pokedex",
    icon: <DiReact />,
    link: "https://github.com/joaovictorgit/pokedex",
    description: "Aplicação desenvolvida em React JS e styled-components",
  },
  {
    id: "reactnative",
    name: "Music Player",
    icon: <DiReact />,
    link: "https://github.com/joaovictorgit/Player_Music",
    description: "Aplicação desenvolvida em React Native com TypeScript",
  },
  {
    id: "java",
    name: "Drink Water",
    icon: <DiJava />,
    link: "https://github.com/joaovictorgit/beber_agua",
    description: "Aplicação de dispositivo móvel desenvolda em Java",
  },
  {
    id: "nodejs",
    name: "Music Boot",
    icon: <DiNodejsSmall />,
    link: "https://github.com/joaovictorgit/music-bot",
    description:
      "Aplicação, desenvolvida usando node.js, que cria um bot no discord que toca música. ",
  },
  {
    id: "typescript",
    name: "Chat Server",
    icon: <SiTypescript />,
    link: "https://github.com/joaovictorgit/ChatServer",
    description:
      "Aplicação, desenvolvida em React que mensagens em tempo real.",
  },
  {
    id: "nodejs",
    name: "Ebook",
    icon: <DiNodejsSmall />,
    link: "https://github.com/joaovictorgit/Ebook",
    description: "API, desenvolvida usando Typescript, de uma loja de livros.",
  },
  {
    id: "typescript",
    name: "Book Store",
    icon: <SiTypescript />,
    link: "https://github.com/joaovictorgit/BookStore",
    description:
      "Aplicação, desenvolvida em React Js, que utiliza os dados da API Ebook.",
  },
  {
    id: "reactjs",
    name: "Games Shop",
    icon: <DiReact />,
    link: "https://github.com/joaovictorgit/Ecommerce-games",
    description:
      "Aplicação, desenvolvida em React Js, de um E-commerce de Games",
  },
  {
    id: "reactjs",
    name: "List Task",
    icon: <DiReact />,
    link: "https://github.com/joaovictorgit/List-Task",
    description:
      "Aplicativo, desenvolvido com React Native, que realiza um CRUD usando Firebase.",
  },
];

function ListProjects() {
  return (
    <section className="list-container">
      <div className="list-grid">
        {listProjects.map((list, index) => (
          <div className="list-card" id={list.id} key={index}>
            {list.icon}
            <div className="list-info">
              <h3>
                <a href={list.link}>{list.name}</a>
              </h3>
              <p>{list.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListProjects;
