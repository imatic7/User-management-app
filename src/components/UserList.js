import React from "react";
import {
  Avatar,
  StyledTitle,
  UserListCard,
  colors,
} from "./../components/Styles";

const UserList = ({ userList = [] }) => {
  return (
    <>
      {userList.map((data) => {
        if (data) {
          return (
            <UserListCard>
              <div key={data.id}>
                <StyledTitle size={25} color={colors.dark1}>
                  {data.first_name} {data.last_name}
                </StyledTitle>
                <Avatar>
                  <img alt="" key={data.avatar} src={data.avatar} />
                </Avatar>
              </div>
            </UserListCard>
          );
        }
        return null;
      })}
    </>
  );
};

export default UserList;
