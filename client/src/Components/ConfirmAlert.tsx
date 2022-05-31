import React from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";

export interface IConfirmAlertComponentProps {}

const ConfirmAlertComponent: React.FunctionComponent<
  IConfirmAlertComponentProps
> = (props) => {
  return (
    <Snackbar>
      <Alert severity="success">
        <AlertTitle>Email Sent!</AlertTitle>Thank you for reaching out!
      </Alert>
    </Snackbar>
  );
};

export default ConfirmAlertComponent;
