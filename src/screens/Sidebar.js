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
    overflow: "hidden",
    backgroundColor: "#1B1E31 !important",

    "& fieldset": {
      border: "1px solid #3E445E !important",
    },
    // border: "1px dashed white",
    marginTop: "10px",
    paddingBottom: "10px",
  },
  searchButton: {
    borderRadius: "0px",
    backgroundColor: "#0D0E17 !important",
    paddingTop: "10px",
    borderRadius: "0px !important",
    width: "56px",
    height: "56px",
    "&:hover": {
      backgroundColor: "#131521",
    },
  },
  chatAreaScrollbar: {
    "&:hover": {
      // height: "300px", // Set the desired height for the scrollbar container
      overflowY: "auto", // Add a vertical scrollbar when content overflows
      height: "550px",
    },
  },
  chatAreaHeadingText: {
    margin: "15px 0 5px 20px !important",
    color: "#87929E !important",
    fontSize: "12px !important",
  },
  chatTitleArea: {
    margin: "10px 0px",
    display: "flex",
    flexDirection: "row",
    "&:hover": {
      backgroundColor: "#26293B !important",
    },
  },
  chatButton: {
    display: "flex",
    backgroundColor: "inherit ",
    // color: "#87929E !important",
    borderRadius: "5px",
    marginTop: "10px",
    padding: "10px",
    "&:hover": {
      // backgroundColor: "#26293B !important",
      backgroundColor: "#26293B !important",
    },
  },

  chatButtonText: {
    color: "#596570 !important",
    fontSize: "14px !important",
    textTransform: "initial",
    paddingLeft: "5px",
    paddingRight: "0px",
  },
  chatButtonActions: {
    display: "flex",
    flexDirection: "row",
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

        <Box className={classes.chatAreaScrollbar}>
          <Typography className={classes.chatAreaHeadingText}>
            PREVIOUS 30 DAYS
          </Typography>

          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>

          {/* *********************** July data ************************** */}
          <Typography className={classes.chatAreaHeadingText}>
            July 2023
          </Typography>

          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>

          {/* *********************** June data ************************** */}
          <Typography className={classes.chatAreaHeadingText}>
            June 2023
          </Typography>

          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.chatTitleArea}>
            {/*  chat area Box*/}
            <Button className={classes.chatButton}>
              {/*chat Button*/}
              <img src={penNib} width={25} height={25} />
              <Typography className={classes.chatButtonText}>
                Chat title
              </Typography>
              {/* <span className={classes.chatButtonText}>Chat title</span> */}
            </Button>
            <Box className={classes.chatButtonActions}>
              {" "}
              {/*  chat button actions*/}
              <IconButton style={{ color: "#87929E" }}>
                {" "}
                <RemoveRedEyeOutlinedIcon style={{ marginRight: "5px" }} />
              </IconButton>
              <IconButton style={{ color: "#87929E" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
