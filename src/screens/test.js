import React, { useState } from "react";

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageIcon from "@mui/icons-material/Image";
import En from "../images/en-48.png";
import De from "../images/de-48.png";
import Ru from "../images/ru-48.png";
import Ar from "../images/ar-48.png";

const Test = () => {
  const languages = ["En", "De", "Ru", "Ar"];
  const flags = [En, De, Ru, Ar];
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <h2>Language Lddddddist with Popover</h2>
      <Button
        aria-describedby={id}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{ background: "inherit" }}
      >
        En <ExpandMoreIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <List>
          {languages.map((language, index) => (
            // <ListItem key={index}>{language}</ListItem>
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar style={{ width: "30px", height: "30px" }}>
                  <img src={flags[index]} alt={language} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={language} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default Test;
