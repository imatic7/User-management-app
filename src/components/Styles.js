import styled from "styled-components";
import { MdClose } from "react-icons/md";

// background
import background from "./../imgs/bg.jpg";

//React router
import { Link } from "react-router-dom";

export const colors = {
  primary: "#fff",
  theme: "#409cf7",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1F2937",
  dark2: "#93b5e6",
  dark3: "#9CA3AF",
  red: "#d47b7b",
};

// Styled components
export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background});
  background-size: cover;
  background-attachment: fixed;
`;

//HomePage
export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 5px;
`;

export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 25px;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 85px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.primary};
  border-radius: 25px;
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

// Input
export const StyledTextInput = styled.input`
  width: 280px;
  padding: 15px;
  padding-left: 50px;
  font-size: 17px;
  letter-spacing: 1px;
  color: ${colors.dark1};
  background-color: ${colors.light2};
  border: 0;
  outline: 0;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;

  ${(props) =>
    props.invalid &&
    `background-color: ${colors.red}; color: ${colors.primary};`}

  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 45px 55px;
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

//ErrorMSg display
export const ErrorMsg = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

//icons
export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 21px;
  top: 35px;
  ${(props) => props.right && `right: 15px;`}
  ${(props) => !props.right && `left: 15px;`}
`;

/***************/
export const DashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const DashButton = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

/****************** */

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  padding: 50px 0;
  position: relative;
  align-items: centar;

  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;

  justify-content: center;

  line-height: 1.8;
  color: #141414;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const UserListCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: centar;
  padding: 25px;
`;
export const UserListTitle = styled.div`
  font-size: 100px;
  text-align: centar;
  color: ${colors.primary};
  padding: 5px;
  margin-bottom: 25px;
`;

export const DashboardBody = styled.div`
  margin: 0;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: centar;
  background: url(${background});
  background-size: cover;
  background-attachment: fixed;
`;
export const SearchbarStyle = styled.div`
  text-align: center;
  align-items: center;
  margin-left: 180px;
`;

export const AddUserButton = styled.button`
  float: right;
  margin-right: 30px;
  padding: 5px;
  width: 150px;
  background-color: ${colors.primary};
  font-size: 15px;
  border: 3px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.dark1};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const AddUserModalButton = styled.button`
  padding: 10px;
  margin: 20px;
  margin-left: 180px;

  width: 150px;
  background-color: transparent;
  font-size: 16px;

  border: 2px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;
