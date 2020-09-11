import styled from 'styled-components';

export const CardsBlock = styled.div`
  display: flex;
  height: 208px;
  width: 100%;
  padding: 20px 0;
  align-content: stretch;
  overflow-x: scroll;

  & > * {
    margin: 0 10px;
  }
`;

export const CardBlock = styled.div`
  & > * {
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 20px 0;
  }

  & :nth-child(1) {
    margin-left: auto;
  }
`;

export const UserName = styled.h1`
  margin-bottom: 10px;
`;
