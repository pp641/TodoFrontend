import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCollaborators } from "../actions/collaboratorActions";
const AllCollaborators = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.collaboratorReducers);

  const [collaboratedRecords, setCollaboratedRecords] = useState([]);

  useEffect(() => {
    dispatch(getAllCollaborators());
    // setCollaboratedRecords(records.getAllCollaborations);
  }, []);
  return <div> okvisible</div>;
};

export default AllCollaborators;
