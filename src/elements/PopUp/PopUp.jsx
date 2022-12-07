import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Header } from '../Header';
import {style} from './PopUpStyles'
import CloseIcon from '@mui/icons-material/Close';

export default function PopUp({open,handleClose,children,header,footer}) {

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      > 
        <Box sx={style.box}>
          <div style={style.header}>
            <Header color='black'>{header}</Header>
            <CloseIcon color="black" onClick={handleClose} sx={[
              {
                '&:hover': {
                  color: 'blue',
                }
              
            }]}
            />
          </div>
          <div style={style.body}>
            {children}
          </div>
          <div style={style.footer}>
            <Header color='black'>{footer}</Header>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
