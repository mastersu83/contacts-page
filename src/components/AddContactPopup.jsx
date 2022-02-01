import React from "react";
import { Button, Divider, Paper, TextField } from "@mui/material";

const AddContactPopup = ({ openPopup, addContactPopup }) => {
  const [input, setInput] = React.useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <div className={`popupClean ${addContactPopup ? "open" : ""}`}>
      <div className="check-buttons remove-popup">
        <Paper className="header header-remove-popup" elevation={1}>
          <h4>Введите имя и номер телефона</h4>
        </Paper>
        <div className="field">
          <TextField
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Введите Имя"
            variant="standard"
            fullWidth
            value={input.login}
          />
          <Divider />
          <br />
          <TextField
            onChange={handleChange}
            name="phone"
            type="text"
            placeholder="Введите номер телефона"
            variant="standard"
            fullWidth
            value={input.password}
          />
          <Divider />
          <br />
          <Button onClick={openPopup} variant="outlined">
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddContactPopup;
