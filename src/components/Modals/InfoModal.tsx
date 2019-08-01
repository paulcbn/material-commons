import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { FC } from 'react';

import { SlideUp } from './common';

export type InfoModalProps = {
  open: boolean,
  onClose: () => void,
  data?: { message: string, title: string }
}

const InfoModal: FC<InfoModalProps> = ({ open, data, onClose }) => {
  return (
    <Dialog
      TransitionComponent={ SlideUp }
      open={ open }
      onClose={ onClose }
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{ data && data.title || '' }</DialogTitle>
      <DialogContent>
        <DialogContentText>{ data && data.message || '' }</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
