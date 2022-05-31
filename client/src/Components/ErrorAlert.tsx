import React from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";

export interface IErrorAlertComponentProps {}

const ErrorAlertComponent: React.FunctionComponent<
  IErrorAlertComponentProps
> = (props) => {
  return (
    <Snackbar open={true} autoHideDuration={6000} onClose={() => {}}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>Your email failed to send
      </Alert>
    </Snackbar>
  );
};

export default ErrorAlertComponent;
