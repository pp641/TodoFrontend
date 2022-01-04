import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOneRecord,
  getAllData,
  updateRecord,
} from "../../task/actions/actionOne";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { setData } from "../../task/actions/actionOne";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DoneIcon from "@mui/icons-material/Done";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { WindowSharp } from "@mui/icons-material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const colorCombination = ["greenyellow", "red", "yellow"];
const style2 = (id, setter) =>
  setter === id
    ? {
        display: "inline",
        color: `${colorCombination[id - 1]}`,
        background: "black",
      }
    : { display: "none" };
const ComponentOne = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenNew = () => {
    setOpen(true);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [updatedValue, setUpdatedValue] = React.useState("");
  const records = useSelector((state) => state);
  const [rand, setRand] = React.useState(0);
  const [currentObjectState, setCurrentObjectState] = React.useState("");
  const [currentId, setCurrentId] = React.useState("");
  const [currentValue, setCurrentValue] = React.useState("");
  const [allRecords, setAllRecords] = React.useState([]);
  const [datas, setDatas] = React.useState("");

  React.useEffect(() => {
    dispatch(getAllData());
    setAllRecords(records.TaskReducers.allData);
    setRand(1);
    console.log(records);
  }, [records.TaskReducers.allData.length, datas]);

  return (
    <div>
      <Typography
        component="h1"
        color="green"
        style={{
          textAlign: "center",
        }}
      >
        Todo TaskBar with Different Priority Levels
      </Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <input
              type="text"
              value={currentValue}
              onChange={(e) => {
                setCurrentValue(e.target.value);
              }}
            />
            <select
              onChange={(e) => {
                setCurrentObjectState(e.target.value);
              }}
            >
              <option selected={currentObjectState === 1} value={1}>
                Completed Task
              </option>
              <option selected={currentObjectState === 2} value={2}>
                high Priority Task
              </option>
              <option selected={currentObjectState === 3} value={3}>
                low Priority Task
              </option>
            </select>
            <Button
              style={{ margin: "2px" }}
              variant="contained"
              onClick={() => {
                dispatch(
                  updateRecord(currentId, { currentValue, currentObjectState })
                );
                console.log("setCurrentObjectState", currentObjectState);
                setCurrentId("");
                handleClose();
                window.location.reload();
              }}
            >
              {" "}
              Update Record{" "}
            </Button>
          </Box>
        </Fade>
      </Modal>
      <input
        type="text"
        value={datas}
        onChange={(e) => {
          setDatas(e.target.value);
        }}
      />
      <div style={{ width: "40%" }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Priority"
              onChange={handleChange}
            >
              <MenuItem value={1}>Completed Task</MenuItem>
              <MenuItem value={2}>Task in High Priority</MenuItem>
              <MenuItem value={3}>Task in Low Priority</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div> Click to save Record</div>
      <Button
        style={{ margin: "2px" }}
        variant="contained"
        onClick={() => {
          dispatch(setData({ data: datas, currentState: age }));
          setDatas("");
          // window.location.reload();
        }}
      >
        Save
      </Button>
      {allRecords?.map((data, key) => (
        <Box sx={{ minWidth: 275 }}>
          <Card
            variant="outlined"
            style={{
              width: "30%",
              margin: "10px",
              minHeight: "200px",
              display: "flex",
              float: "left",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                padding: "10px",
                margin: "10px",
                minWidth: "400px",
              }}
            >
              {key} :
              <div>
                <span style={{ color: "red" }}>id :</span> {data._id}
                <div>
                  <span style={{ color: "green" }}>Record :: </span> {data.data}
                </div>
                <div>CurrentState : {data.currentState}</div>
                <div>
                  <Button
                    style={{ margin: "2px" }}
                    variant="contained"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    style={style2(1, data.currentState)}
                  >
                    <DoneIcon />
                    Task Completed
                  </Button>
                  <Button
                    style={{ margin: "2px" }}
                    variant="contained"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    style={style2(2, data.currentState)}
                  >
                    <PriorityHighIcon />
                    Task is in high priority
                  </Button>
                  <Button
                    style={{ margin: "2px" }}
                    variant="contained"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    style={style2(3, data.currentState)}
                  >
                    <LowPriorityIcon />
                    task is in low priority
                  </Button>
                </div>
                <Button
                  style={{ margin: "2px" }}
                  variant="contained"
                  onClick={() => {
                    setCurrentId(data._id);
                    setCurrentValue(data.data);
                    console.log("Curent", data._id);
                    setCurrentObjectState(data.currentState);
                    handleOpenNew();
                  }}
                >
                  Update
                </Button>
                <Button
                  style={{ margin: "2px" }}
                  variant="contained"
                  onClick={() => {
                    console.log(data._id);
                    dispatch(deleteOneRecord(data._id));
                    window.location.reload();
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default ComponentOne;
