import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import {
  faCheck,
  faCircleInfo,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons/index';

const Item = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  align-items: center;
  padding: 0 1rem;
  & + & {
    border-top: 1px solid black;
  }
  .username {
    font-family: 'nanum-middle';
    font-size: 3rem;
  }
  .icon {
    width: 3rem;
    padding-left: 0.8rem;
    cursor: pointer;
  }
`;

const UserItem = (props) => {
  const { item, checked, onChange, onDelete } = props;
  return (
    <Item>
      <span className="username">
        {item.userLastName}
        {item.userFirstName}
      </span>
      <div className="options">
        {checked ? null : (
          <FontAwesomeIcon
            className="icon"
            icon={faCheck}
            onClick={() => onChange(item)}
          />
        )}
        <FontAwesomeIcon className="icon" icon={faCircleInfo} />
        <FontAwesomeIcon
          className="icon"
          icon={faTrashCan}
          onClick={() => onDelete(item.userId)}
        />
      </div>
    </Item>
  );
};

export default UserItem;
