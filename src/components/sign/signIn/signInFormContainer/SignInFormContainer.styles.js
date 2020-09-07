import styled from 'styled-components';
import { borderGrey, nonSelectGrey } from '../../../../styles/variables';

export const SignInForm = styled.div`
  height: 268px;
  padding-top: 15px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OtherSign = styled.div`
  position: relative;
  width: 268px;
  height: 15px;
  display: flex;
  align-items: center;
  margin: 10px 40px 18px 40px;
`;

export const OtherSignLine = styled.div`
  width: 268px;
  height: 1px;
  background-color: ${borderGrey};
`;

export const OtherSignWord = styled.p`
  position: absolute;
  top: 0;
  left: 99px;
  background-color: #fff;
  padding: 0 18px;
  width: 70px;
  text-align: center;
  color: ${nonSelectGrey};
`;

export const PasswordReset = styled.span`
  color: #385185;
  margin-top: 12px;
  font-size: 1.2rem;
`;
