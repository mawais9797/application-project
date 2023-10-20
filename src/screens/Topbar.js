import React, { useState } from "react";
import {
  FormControl,
  Box,
  MenuItem,
  InputLabel,
  Select,
  List,
  ListItem,
  Typography,
  Divider,
  Button,
  Popover,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  Badge,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageIcon from "@mui/icons-material/Image";
import En from "../images/en-48.png";
import De from "../images/de-48.png";
import Ru from "../images/ru-48.png";
import Ar from "../images/ar-48.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
const useStyles = makeStyles({
  boxContainer: {
    display: "flex",
    flexDirection: "row",
  },
  clientSelect: {
    color: "white",
    width: "240px",
    marginRight: "20px !important",
    "& fieldset": {
      border: "1px solid #3E445E",
    },
    "&:hover fieldset": {
      border: "1px solid white !important",
    },
  },
  selectLable: {
    color: "#87929E !important",
    // "& legend": {
    //   color: "#87929E !important",
    // },
  },
  TeamList: {
    display: "flex",
    flexDirection: "row",
    position: "relative", // Establish a positioning context
    zIndex: 1, // Set a z-index value
  },
  TeamListItem: {
    padding: "0px !important",
  },
  TopbarSettings: {
    padding: "0px 10px !important",
  },
  TeamImages: {
    width: "32px",
    height: "32px",
    borderRadius: "40px",
    marginRight: "-10px",
    border: "3px solid #292F4C",
  },
  TopbarDivider: {
    marginLeft: "20px !important",
    marginRight: "20px !important",
  },
  TeamWhiteCircle: {
    width: "32px",
    height: "32px",
    backgroundColor: "#F3F4F8",
    borderRadius: "19px",
    color: "#2E3A48",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  LanguageList: {
    padding: "0px !important",
  },
  LanguageListPadding: {
    padding: "0px !important",
  },
});

function Topbar() {
  const classes = useStyles();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box className={classes.boxContainer}>
        <FormControl className={classes.clientSelect} color="myBorderColor">
          <InputLabel id="client-select-label" className={classes.selectLable}>
            Client name
          </InputLabel>
          <Select
            labelId="client-select-label"
            id="client-select"
            value={age}
            label="Client name"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.clientSelect} color="myBorderColor">
          <InputLabel id="project-select-label" className={classes.selectLable}>
            Project title
          </InputLabel>
          <Select
            labelId="project-select-label"
            id="project-select"
            value={age}
            label="Project title"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" textAlign="right">
        <Box>
          <List className={classes.TeamList}>
            <ListItem className={classes.TeamListItem} style={{ zIndex: "5" }}>
              <img src={p1} alt="p1" className={classes.TeamImages} />
            </ListItem>
            <ListItem className={classes.TeamListItem} style={{ zIndex: "4" }}>
              <img src={p2} alt="p2" className={classes.TeamImages} />
            </ListItem>
            <ListItem className={classes.TeamListItem} style={{ zIndex: "3" }}>
              <img src={p3} alt="p3" className={classes.TeamImages} />
            </ListItem>
            <ListItem className={classes.TeamListItem} style={{ zIndex: "2" }}>
              <img src={p4} alt="p4" className={classes.TeamImages} />
            </ListItem>
            <ListItem className={classes.TeamListItem} style={{ zIndex: "1" }}>
              <img src={p5} alt="p5" className={classes.TeamImages} />
            </ListItem>
            <ListItem className={classes.TeamListItem} style={{ zIndex: "-1" }}>
              <Box className={classes.TeamWhiteCircle}>
                <Typography style={{ paddingLeft: "5px" }}>+5</Typography>
              </Box>
            </ListItem>
          </List>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          className={classes.TopbarDivider}
          style={{ backgroundColor: "#3E445E" }}
        />
        <Box>
          <List className={classes.TeamList}>
            <ListItem className={classes.TeamListItem}>
              <Button
                aria-describedby={id}
                variant="contained"
                disableElevation
                onClick={handleClick}
                style={{ background: "inherit", width: "30px" }}
              >
                En <ExpandMoreIcon />
              </Button>
            </ListItem>
            <ListItem className={classes.TopbarSettings}>
              <Badge badgeContent={4} color="warning">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </ListItem>
            <ListItem className={classes.TopbarSettings}>
              <SettingsOutlinedIcon />
            </ListItem>
            <ListItem className={classes.TopbarSettings}>
              <img src={p6} alt="p4" className={classes.TeamImages} />
            </ListItem>
          </List>
        </Box>
      </Box>
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
        <List className={classes.LanguageListPadding}>
          {languages.map((language, index) => (
            // <ListItem key={index}>{language}</ListItem>
            <>
              <ListItem key={index} className={classes.LanguageList}>
                <ListItemButton fullwidth>
                  <ListItemAvatar>
                    <Avatar style={{ width: "30px", height: "30px" }}>
                      <img src={flags[index]} alt={language} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={language} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Popover>
    </Box>
  );
}

export default Topbar;
