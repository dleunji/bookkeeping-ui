import React from 'react';
import UserItem from './UserItem';
import styled from 'styled-components';
import ExtraUser from './ExtraUser';
const List = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url('/images/SkyCloud01_generated.jpg');
  background-size: cover;
  width: 50rem;
  min-height: 40rem;
  border: 2px solid black;
  overflow-y: auto;
`;

const UserItemList = (props) => {
  const { users, user, onChange, onDelete, open, handleAddOpen, handleClose, saveClose, newUser, handleTextField } = props;
  return (
    <List>
      {users?.map((item, idx) => (
        <UserItem
          item={item}
          key={idx}
          checked={user != null && item.userId === user.userId}
          onChange={onChange}
          onDelete={onDelete}
        />
      ))}
      <ExtraUser
        open={open}
        handleAddOpen={handleAddOpen}
        handleClose={handleClose}
        saveClose={saveClose}
        newUser={newUser}
        handleTextField={handleTextField}
      />
    </List>
  );
};

export default UserItemList;
