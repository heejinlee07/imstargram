import React from 'react';
import styled from 'styled-components';
import { bodyBgtGrey } from '../../styles/variables';
import { WhiteButtons } from '../common/Buttons';

const RecommendationTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${bodyBgtGrey};
    font-weight: bold;
  }
`;

//module
function recommendationTitle({ color, ...rest }) {
  const changeStyle = (color) => {
    return (
      <WhiteButtons color={color} {...rest}>
        모두 보기
      </WhiteButtons>
    );
  };
  return (
    <RecommendationTitle>
      <h1>회원님을 위한 추천</h1>
      {changeStyle(color, { ...rest })}
    </RecommendationTitle>
  );
}

export default recommendationTitle;
