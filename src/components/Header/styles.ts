import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  color: #fff;
  width: 100%;
  min-height: 8rem;
  display: flex;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    margin-left: 2rem;
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
