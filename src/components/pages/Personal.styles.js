import styled from 'styled-components';
import { bodyBgWhite, borderGrey, nonSelectGrey } from '../../styles/variables';

export const PersonalWrap = styled.div`
  width: 935px;
  margin: 0 auto;
  padding: 30px 20px 0;
  border-bottom: 1px solid ${borderGrey};
  main {
    padding-bottom: 44px;
    display: flex;
  }
  header {
    width: 292px;
    height: 150px;
    margin-right: 30px;
  }
`;

export const Profile = styled.div`
  background-image: url(https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=Fe1q9bkeIbAAX8RjME1&oh=99913ecad2b7f776705b35ee38f76f4e&oe=5F7E760F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2);
  background-size: 150px;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border: 0px solid ${bodyBgWhite};
  border-radius: 50%;
`

export const IdWrap = styled.div`
  display: flex;
  height: 40px;
  margin-bottom: 20px;
  h3 {
    font-weight: 300;
    font-size: 28px;
  }
  button {
    height: 30px;
    margin-left: 20px;
    padding: 5px 9px;
    font-weight: 400;
    border-radius: 4px;
    border: 1px solid rgb(219, 219, 219);
    background-color: ${(props) => props.bgColor || bodyBgWhite};
  }
  div {
    margin-left: 13px;
    line-height: 40px;
  }
`

export const FollowWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 16px;
  
  li {
    display: block;
    margin-right: 40px;
    span {
      margin-left: 4px;
      font-weight: 600;
    }
  }
`

export const ProfileNav = styled.li`
  display: flex;
  justify-content: center;
  width: 935px;
  height: 52px;
  margin: 0 auto;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: ${nonSelectGrey};
  li {
    margin: 0 50px 3px;
    letter-spacing: 1.5px;
    span {
      padding-right: 5px;
    }
  }
  li:last-child {
    margin-right: 0;
  }
`
