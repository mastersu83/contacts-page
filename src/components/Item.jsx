import React from "react";
import { Divider, IconButton, ListItem, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const Item = () => {
  return (
    <>
      <ListItem>
        <div className="d-flex item">
          <Typography className="item-text">1</Typography>
          <Typography className="item-text">Вася </Typography>
          <Typography className="item-text">+956465465</Typography>
          <Typography className="item-text">Сосед</Typography>
          <Typography className="item-text">22.01.2021</Typography>
          <div className="item-buttons d-flex">
            <IconButton>
              <EditIcon style={{ fontSize: 20 }} />
            </IconButton>
            <IconButton>
              <DeleteOutlineIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
      </ListItem>
      <Divider />
    </>
  );
};
