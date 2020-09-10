import styled from 'styled-components';

export const IndividualFeedWrap = styled.div`
  width: 935px;
  margin: 0 auto;
`;

export const NoFeed = styled.div`
  height: 380px;
  display: flex;
  div {
    width: 550px;
    margin: auto;
    text-align: center;
    align-items: center;

    h3 {
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 10px;

    }
    p {
      font-size: 16px;
      padding-bottom: 20px;
    }
    div{ 
      width: 340px;
    }
  }
`;

export const BasicImg = styled.div`
    background-color: blue;
    background-image: url("https://www.instagram.com/static/images/mediaUpsell.jpg/6efc710a1d5a.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    max-width: 380px;
    height: 380px;
`;

export const FeedWrap = styled.ul`
  display: flex;
  width: 935px;
  height: 293px;
  margin-bottom: 28px;
  background-color: lime;
  li {
    width: 293px;
    height: 293px;
    background-color: blue;
    margin-right: 28px;
  }
  li:last-child {
    margin-right: 0;
  }
`;

