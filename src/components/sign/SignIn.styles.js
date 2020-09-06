import styled from 'styled-components';
import {
  buttonSkyBlue,
  borderGrey,
  nonSelectGrey,
} from '../../styles/variables';
import '../../index.css';

export const SignBody = styled.section`
  display: flex;
  justify-content: center;
`;

export const SignContainder = styled.div`
  display: flex;
  justify-content: center;
  width: 935px;
  height: 682px;
  margin-top: 64px;
  padding-bottom: 64px;
`;

export const Mockup = styled.div`
  background-image: url('https://instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png');
  background-size: contain;
  width: 454px;
  height: 618px;
`;

export const SignInBody = styled.div`
  width: 350px;
  height: 606px;
  margin-top: 12px;
`;

export const SignLogo = styled.h1`
  font-family: 'Satisfy', cursive;
  text-align: center;
  font-size: 4rem;
  margin: 22px 0;
  display: flex;
  justify-content: center;
`;

export const SignFormContainer = styled.div`
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

export const IntendSignQ = styled.p`
  text-align: center;
  line-height: 42px;
`;

export const IntendSignLink = styled.span`
  color: ${buttonSkyBlue};
  margin-left: 0.5rem;
  font-weight: 600;
`;

export const DownloadApp = styled.div`
  height: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const LinkContainer = styled.div`
  width: 300px;
  height: 40px;
  margin: 20px 0 10px 0;
  display: flex;
  justify-content: space-evenly;
`;

export const AppLink = styled.img`
  width: 140px;
`;
