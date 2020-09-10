import styled from 'styled-components';

export const ExploreTempleteUlLtTwo = styled.ul`
  display: flex;
  flex-flow: row wrap;

  & > li {
    width: 32%;
    margin-right: 2%;
    padding-bottom: 2%;
  }
`;

export const ExploreTempleteUl = styled(ExploreTempleteUlLtTwo)`
  & > li {
    &:nth-child(2) {
      width: 66%;
    }

    &:nth-child(3n + 2) {
      margin-right: 0;
    }

    & li:first-child {
      padding-bottom: 6.25%;
    }
  }
`;
