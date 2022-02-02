import React from "react";
import {
  Button,
  Divider,
  IconButton,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import {
  editContactThunk,
  removeContactThunk,
} from "../redux/actions/contacts_action";

export const Item = ({ number, name, phone, id }) => {
  const dispatch = useDispatch();
  // const accessToken = useSelector((state) => state.login.isAuth);
  const [editContact, setEditContact] = React.useState(false);
  const [input, setInput] = React.useState({
    name: name,
    phone: phone,
  });

  const onEditContact = () => {
    setEditContact(true);
  };

  const removeContact = () => {
    dispatch(
      removeContactThunk(
        id,
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hc3RlciIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjQzODA2ODY0LCJleHAiOjE2NDM4MTA0NjR9.EYfBS4DuFMoFa9xpVRtyFgCI3vbXmHDHDZKHlKUeTVc"
      )
    );
  };

  const deActiveEditMode = () => {
    dispatch(
      editContactThunk(
        input.name,
        input.phone,
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hc3RlciIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjQzODA2ODY0LCJleHAiOjE2NDM4MTA0NjR9.EYfBS4DuFMoFa9xpVRtyFgCI3vbXmHDHDZKHlKUeTVc",
        id
      )
    );
    setEditContact(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <ListItem>
        {!editContact && (
          <div className="d-flex item">
            <Typography className="item-text">{number}</Typography>
            <Typography className="item-text">{name}</Typography>
            <Typography className="item-text">{phone}</Typography>
            <div className="item-buttons d-flex">
              <IconButton onClick={onEditContact}>
                <EditIcon style={{ fontSize: 20 }} />
              </IconButton>
              <IconButton onClick={removeContact}>
                <DeleteOutlineIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        )}
        {editContact && (
          <div className="d-flex item">
            <Typography className="item-text">{number}</Typography>
            <TextField
              onChange={handleChange}
              name="name"
              type="text"
              autoFocus={true}
              className="item-text"
              value={input.name}
            />

            <TextField
              onChange={handleChange}
              name="phone"
              type="text"
              className="item-text"
              value={input.phone}
            />
            <div className="item-buttons d-flex">
              <Button onClick={deActiveEditMode}>OK</Button>
              <IconButton onClick={removeContact}>
                <DeleteOutlineIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        )}
      </ListItem>
      <Divider />
    </>
  );
};
