import React from "react";
import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Item } from "../components/Item";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import AddContactPopup from "../components/AddContactPopup";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "../redux/actions/contacts_action";
import { logOutAction } from "../redux/actions/login_action";

const Contacts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  React.useEffect(() => {
    if (state.login.isAuth) {
      dispatch(getContactsThunk(state.login.isAuth));
    }
  }, [state.login.isAuth]);

  const logOut = () => {
    dispatch(logOutAction());
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h2>Список Контактов</h2>
          <span className="userName">Имя</span>
          <Link to="/login">
            <LogoutIcon onClick={logOut} className="logOut" />
          </Link>
        </Paper>
        <Button variant="outlined">Добавить</Button>
        <br />
        <br />
        <Divider />
        <List>
          <ListItem>
            <div className="d-flex item">
              <Typography className="item-text">№</Typography>
              <Typography className="item-text">Имя: </Typography>
              <Typography className="item-text">Телефон:</Typography>
              <Typography className="item-text">Описание</Typography>
              <Typography className="item-text">Дата</Typography>
              <div className="item-buttons d-flex">
                <IconButton disabled={true}>
                  <EditIcon style={{ fontSize: 20 }} />
                </IconButton>
                <IconButton disabled={true}>
                  <DeleteOutlineIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
            </div>
          </ListItem>
          <Divider />
          {state.contacts && state.contacts.map((c) => <Item key={c.id} />)}
        </List>
      </Paper>
      <AddContactPopup />
    </div>
  );
};

export default Contacts;
