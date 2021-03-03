import React from "react";
import "../../translations/i18n";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { createStyles, Dialog, IconButton, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

interface Props {
  title: string;
  children: React.ReactElement;
  handleClose: () => void;
  open: boolean;
}

export const ModalInfo = (props: Props) => {
  return (
    <Dialog onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}>
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        {props.title}
      </DialogTitle>
      <DialogContent dividers>
        {props.children}
      </DialogContent>
    </Dialog>
  );
};