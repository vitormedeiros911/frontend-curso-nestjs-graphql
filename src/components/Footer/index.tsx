import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <h3>Links</h3>
      <ul>
        <li>
          <FaLinkedin color="#fff" size={25} />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/vitormedeiros911/"
          >
            Meu perfil no LinkedIn
          </a>
        </li>
        <li>
          <FaGithub color="#fff" size={25} />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/vitormedeiros911/"
          >
            Meu GitHub
          </a>
        </li>
        <li>
          <GrGraphQl color="#fff" size={25} />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/vitormedeiros911/curso-nestjs-graphql-mongodb"
          >
            Repositório da API
          </a>
        </li>
        <li>
          <FaReact color="#fff" size={25} />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/vitormedeiros911/frontend-curso-nestjs-graphql"
          >
            Repositório do front-end
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Footer;
