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
  const accessToken = useSelector((state) => state.login.isAuth);
  const contacts = useSelector((state) => state.contacts);
  const [addContactPopup, setAddContactPopup] = React.useState(false);

  const handleContactPopup = () => {
    setAddContactPopup(!addContactPopup);
  };

  React.useEffect(() => {
    dispatch(
      getContactsThunk(
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hc3RlciIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjQzODA2ODY0LCJleHAiOjE2NDM4MTA0NjR9.EYfBS4DuFMoFa9xpVRtyFgCI3vbXmHDHDZKHlKUeTVc"
      )
    );
    if (accessToken) {
    }
  }, [accessToken]);

  const logOut = () => {
    dispatch(logOutAction());
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h2>Список Контактов</h2>
          <span className="userName">Имя</span>
          <Link to="/">
            <LogoutIcon onClick={logOut} className="logOut" />
          </Link>
        </Paper>
        <Button onClick={handleContactPopup} variant="outlined">
          Добавить
        </Button>
        <br />
        <br />
        <Divider />
        <List>
          <ListItem>
            <div className="d-flex item">
              <Typography className="item-text">№</Typography>
              <Typography className="item-text">Имя: </Typography>
              <Typography className="item-text">Телефон:</Typography>
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
          {contacts &&
            contacts.map((c, index) => (
              <Item
                key={c.id}
                id={c.id}
                name={c.name}
                phone={c.phone}
                number={index + 1}
              />
            ))}
        </List>
      </Paper>
      <AddContactPopup
        accessToken={accessToken}
        openPopup={handleContactPopup}
        addContactPopup={addContactPopup}
      />
    </div>
  );
};

export default Contacts;
