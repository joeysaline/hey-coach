import React from "react";
import { Button, Paper } from "@mui/material";
import { useActivity } from "../contexts/ActivityContexts";

export default function Activity({ props }) {
    const { removeActivity } = useActivity();
  function addToActivityTracker() {}
  function editActivity() {}
  function deleteActivity(e) {
    e.preventDefault();
    removeActivity(props.id);
  }
  return (
    <>
      <div>
        <img src={props.imageURL} width={200} />
        <label>{props.title} id: {props.id}</label>
        <Button>Add to today's tracker</Button>
        <Button>Edit</Button>
        <Button onClick={deleteActivity}>Delete</Button>
      </div>
    </>
  );
}
