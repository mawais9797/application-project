import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import p7 from "../images/p7.png";

const useStyles = makeStyles({
  container: {
    width: "100%",
    margin: "10px",
  },
  ChatTitleBar: {
    backgroundColor: "#161827",
    height: "52px",
    paddingLeft: "10px",
    paddingTop: "25px",
  },
  ChatMessageArea: {
    width: "88px",
    backgroundColor: "inherit",
  },
  ChatImage: {
    width: "40px",
    height: "40px",
  },
});

const ChatScreen = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.ChatTitleBar}>
        <Box>Chat title</Box>
      </Box>
      <Box className={classes.ChatMessageArea}>
        <Box>
          <img src={p7} className={classes.ChatImage} />
        </Box>
        <Box className={classes.ChatMessageContent}></Box>
      </Box>
    </Box>
  );
};

export default ChatScreen;
