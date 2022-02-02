import React from "react";
import { Button, Divider, Paper, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addContactThunk } from "../redux/actions/contacts_action";

const AddContactPopup = ({ openPopup, addContactPopup }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.isAuth);
  const [input, setInput] = React.useState({
    name: "",
    phone: "",
  });

  const addContact = () => {
    if (input.name.length && input.phone.length) {
      dispatch(addContactThunk(input.name, input.phone, accessToken));
      openPopup();
    }
    setInput({ ...input, name: "", phone: "" });
  };

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
            value={input.name}
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
            value={input.phone}
          />
          <Divider />
          <br />
          <Button onClick={addContact} variant="outlined">
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddContactPopup;
