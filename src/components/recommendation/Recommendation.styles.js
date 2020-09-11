import styled from 'styled-components';
import { bodyBgtGrey } from '../../styles/variables';

export const RecommendationBlock = styled.div`
  margin-left: 30px;
`;

export const LoginUserInfo = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const LoginUserName = styled.div`
  margin-left: 15px;
`;

export const UserNickName = styled.div`
  font-size: 12px;
  color: ${bodyBgtGrey};
`;

export const RecommendationUsersInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  & :first-child {
    max-width: 10%;
  }

  & :nth-child(2) {
    max-width: 70%;
    margin-right: auto;

    & :nth-child(1) {
      max-width: 70%;
    }
    & :nth-child(2) {
      max-width: 70%;
      margin-right: auto;
    }
  }

  & :last-child {
    max-width: 20%;
  }
`;

export const RecommendationFotterBlock = styled.div`
  margin-top: 30px;
`;

export const RecommendationFooter = styled.div``;
