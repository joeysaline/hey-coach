import React from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import { useActivity } from "../contexts/ActivityContexts";
import { Button, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export default function CreateFood() {
  const { currentUser } = useAuth();
  const { activity, setActivity, createActivity } = useActivity();

  function handleActivityStateChange(e) {
    setActivity({ ...activity, title: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (activity.title.trim()) {
      createActivity({ ...activity, id: uuidv4() });
      setActivity({ ...activity, title: "" });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        variant="standard"
        type="text"
        label="enter an activity"
        value={activity.title}
        onChange={handleActivityStateChange}
      />
      <Button variant="contained" type="submit" color="primary">
        Add
      </Button>
    </form>
  );
}
