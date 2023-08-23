import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  color: #fff;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 10px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  .logo {
    display: flex;
    align-items: center;
  }

  svg {
    margin-top: 2rem;
    margin-right: 10px;
  }

  h1 {
    margin-top: 2rem;
    font-weight: 600;
    font-size: 2rem;
  }
`;
