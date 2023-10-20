import {
  Box,
  Button,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import sidebarIcon from "../images/sidebar-right-24.png";
import penNib from "../images/pen-nib-32.png";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "208px",
    "& fieldset": {
      border: "1px solid #3E445E !important",
    },
    border: "1px dashed white",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  searchButton: {
    borderRadius: "0px",
    backgroundColor: "#0D0E17",
    paddingTop: "10px",
    width: "56px",
    height: "56px",
    "&:hover": {
      backgroundColor: "#131521",
    },
  },
  chatButton: {
    borderRadius: "0px",
    backgroundColor: "#0D0E17",
    paddingTop: "10px",
    width: "56px",
    height: "56px",
    "&:hover": {
      backgroundColor: "#131521",
    },
  },
  chatButtonText: {
    margin: "15px 0 5px 20px",
    color: "#87929E",
    fontSize: "12px ",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.container}>
        <Box
          display="flex"
          backgroundColor="#161827"
          borderRadius="3px"
          marginTop="0px"
        >
          <InputBase
            sx={{
              ml: 2,
              flex: 1,
              color: "#87929E",
              backgroundColor: "inherit",
            }}
            placeholder="Search"
          />
          <Button type="button" className={classes.searchButton}>
            {/* <SearchIcon /> */}
            <Box>
              <img
                src={sidebarIcon}
                style={{ width: "20px", height: "20px" }}
              />
            </Box>
          </Button>
        </Box>

        <Typography className={classes.chatButtonText}>
          PREVIOUS 30 DAYS
        </Typography>

        {/* <Link to="#"> */}
        <Button
          style={{
            display: "flex",
            backgroundColor: "#26293B",
            color: "#87929E",
            borderRadius: "5px",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <img src={penNib} width={25} height={25} />
          <Typography style={{ fontSize: "12px", paddingLeft: "5px" }}>
            Chat title
          </Typography>
          <Box display="flex" marginLeft="30px">
            <IconButton style={{ color: "#87929E" }}>
              {" "}
              <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
            </IconButton>
            <IconButton style={{ color: "#87929E" }}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Box>
        </Button>
        {/* </Link> */}
      </Box>
    </Box>
  );
};

export default Sidebar;
