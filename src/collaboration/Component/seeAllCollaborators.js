import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCollaborators } from "../actions/collaboratorActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import UpdateUsersOpenModal from "./updateUsersOpenModal";
import { updateValuesforUpdation } from "../actions/collaboratorActions";
import ComponentOne from "./componentForCollaboration";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AllCollaborators = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.collaboratorReducers);

  const [collaboratedRecords, setCollaboratedRecords] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAllCollaborators());
    setCollaboratedRecords(records.getAllCollaborations);
  }, []);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                handleClose();
                dispatch(updateValuesforUpdation());
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
          <UpdateUsersOpenModal />
          <ComponentOne />
        </List>
      </Dialog>{" "}
      okvisible {console.log(collaboratedRecords)}
      <div>
        {collaboratedRecords.map((datas) => (
          <>
            <div
              style={{
                border: "2px solid black",
                float: "left",
                margin: "10px",
                padding: "2%",
              }}
            >
              user Id : {datas._id}
              <div>All Members :</div>
              {datas.AllMembers.map((record) => (
                <ul>
                  {" "}
                  <li> userName : {record.name}</li>{" "}
                  <li> userEmail : {record.email}</li>
                </ul>
              ))}
              <Button variant="outlined">Delete</Button>{" "}
              <Button
                variant="outlined"
                onClick={() => {
                  console.log("dataone", datas);
                  handleClickOpen();
                  dispatch(updateValuesforUpdation(datas));
                }}
              >
                Update
              </Button>{" "}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllCollaborators;
