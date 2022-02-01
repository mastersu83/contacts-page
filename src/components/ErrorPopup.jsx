import React from "react";
import { Button, Paper } from "@mui/material";

const ErrorPopup = ({ errorPopup, text, closePopup }) => {
  return (
    <div className={`popupClean ${errorPopup ? "open" : ""}`}>
      <div className="check-buttons remove-popup">
        <Paper className="header header-remove-popup" elevation={1}>
          <h4>{text}</h4>
        </Paper>
        <Button variant="outlined" onClick={() => closePopup(false)}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default ErrorPopup;
