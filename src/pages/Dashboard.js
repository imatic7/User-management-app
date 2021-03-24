import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./../components/SearchBar";
import UserList from "./../components/UserList";
import {
  StyledTitle,
  colors,
  SearchbarStyle,
  AddUserButton,
  UserListContainer,
} from "./../components/Styles";
import Modal from "./../components/Modal";

const Dashboard = (props) => {
  const [input, setInput] = useState("");
  const [userListDefault, setUserListDefault] = useState();
  const [userList, setUserList] = useState();
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUserList(json.data);
    setUserListDefault(json.data);
  };
  useEffect(() => {
    f();
  }, []);
  const updateInput = async (input) => {
    const filtered = userListDefault.filter((user) => {
      return user.first_name.toLowerCase().includes(input.toLowerCase());
    });

    setInput(input);
    if (input.length >= 2) setUserList(filtered);
    else setUserList(userListDefault);
  };

  //Modal
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <StyledTitle size={65} color={colors.dark1}>
        Users List
      </StyledTitle>
      <SearchbarStyle>
        <SearchBar input={input} onChange={updateInput} />

        <AddUserButton onClick={openModal}>+Add User</AddUserButton>
      </SearchbarStyle>

      <Modal showModal={showModal} setShowModal={setShowModal} />
      <UserListContainer>
        <UserList userList={userList} />
      </UserListContainer>
    </>
  );
};
export default Dashboard;
