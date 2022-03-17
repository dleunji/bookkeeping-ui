import React from 'react';
import styled from 'styled-components';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Button, DialogActions, TextField } from '@mui/material/index';
const ExtraUserBlock = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  .icon {
    cursor: pointer;
    font-size: 3rem;
  }
`;

const ExtraUser = (props) => {
  const {open, handleAddOpen, handleClose, saveClose, newUser, handleTextField} = props;
  return(
    <ExtraUserBlock>
      <FontAwesomeIcon className="icon" icon={faCirclePlus} onClick={handleAddOpen}/>
      <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>사용자 추가</DialogTitle>
        <DialogContent>
          <DialogContentText>
            성
          </DialogContentText>
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            name="userLastName"
            fullWidth
            variant="standard"
            value={newUser.userLastName}
            onChange={handleTextField}
          />
          <DialogContentText>
            이름
          </DialogContentText>
          <TextField
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            name="userFirstName"
            fullWidth
            variant="standard"
            value={newUser.userFirstName}
            onChange={handleTextField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={saveClose}>저장</Button>
        </DialogActions>
      </Dialog>
    </ExtraUserBlock>
  );
}

export default ExtraUser;