import { FaFacebookF } from "react-icons/fa6";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="logo">
        <FaFacebookF color="#fff" size={50} />
        <h1>Fakebook</h1>
      </div>
    </Container>
  );
};

export default Header;
