import styled from 'styled-components';

export const DirectContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
`;
export const DirectWrap = styled.div`
  display: flex;
  justify-content: center;
  max-width: 935px;
  height: 595px;
  height: 100%;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid rgba(var(--b38,219,219,219),1);
`
export const DirectSection = styled.section`
  width: 350px;
  border-right: 1px solid rgba(var(--b6a,219,219,219),1);
  header {
    display: flex;
    width: 349px;
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    align-items: center;
    
    h3 {
      width: 300px;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      padding-left: 30px;
    }
  }
`;

export const MessageVeiwSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 583px;
  height: 593px;
  padding: 24px;
  align-items: center;
  div {
    width: 96px;
    height: 96px;
    margin: 0 auto;
    background-image: url("https://www.instagram.com/static/bundles/es6/sprite_glyphs_7d181aa88fdb.png/7d181aa88fdb.png");
    background-size: 456px 430px;
    background-position: -145px -93px;
    background-repeat: no-repeat;
  }
  h2 {
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    margin-top: 32px;
  }
  p {
    margin: 16px 0 32px;
  }
`;