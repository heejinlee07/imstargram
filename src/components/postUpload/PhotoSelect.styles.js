import styled, { css } from 'styled-components';

export const ImageBlock = styled.div`
  display: flex
  flex-direction: row;
`;
export const ImageSrc = styled.img`
  width: 200px;
  height: 200px;
`;

export const MaterialIcon = styled.span.attrs({
  className: 'material-icons',
})`
  position: absolute;
  top: 50%;
  z-index: 999;
  font-size: 40px;
  color: black;
  cursor: pointer;
  ${({ type }) =>
    type === 'chevron_left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
`;
