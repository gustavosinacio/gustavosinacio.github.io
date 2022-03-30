import { Alert, AlertColor, AlertTitle, Snackbar } from "@mui/material";

interface SnackbarErrorSuccessProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  message: string;
  type?: AlertColor;
}

export const SnackbarErrorSuccess = ({
  open,
  handleClose,
  title,
  message,
  type,
}: SnackbarErrorSuccessProps) => {
  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={5000}>
      <Alert onClose={handleClose} severity={type}>
        {!!title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
};
