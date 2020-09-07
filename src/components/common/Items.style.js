import styled from 'styled-components';

import { bodyBgBlack } from 'variables';

const Item = styled.div`
  width: ${(props) => prop.width || 100}%;
  height: ${(props) => prop.height || 100}%;

  &:hover {
    /* background: ; */
  }
`;
