import React from "react";
import { useActivity } from "../contexts/ActivityContexts";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { graphicImages } from "../Graphics";

export default function QuickAddActivitySetup() {
    const { activity, setActivity, saveActivity, favorite } = useActivity();

    function handleActivityTitleChange(e) {
      setActivity({ ...activity, title: e.target.value });
    }
  
    function handleActivityRateChange(e) {
      setActivity({ ...activity, rate: e.target.value });
    }
  
    const handleImageChange = (e) => {
      setActivity({ ...activity, imageURL: e.target.value });
    };
  
    function handleSubmit(e) {
      e.preventDefault();
      if (activity.title.trim()) {
        setActivity({ ...activity, id: uuidv4() });
        saveActivity(activity);
        favorite(activity);
        setActivity({ ...activity, id: "", title: "", rate: "", imageURL: "" });
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
        onChange={handleActivityTitleChange}
      />
      <TextField
        fullWidth
        variant="standard"
        type="text"
        label="calories per hour"
        value={activity.rate}
        onChange={handleActivityRateChange}
      />
      <Select
        value={activity.imageURL}
        label="image"
        onChange={handleImageChange}
        // sx={{ maxHeight: "20vh", minHeight: "10vh" }}
      >
        {graphicImages.map((img) => (
          <MenuItem key={img.url} value={img.url}>
            <img src={`${img.url}`} width={100} alt="activity" />
          </MenuItem>
        ))}
      </Select>
      <Button variant="contained" type="submit" color="primary">
        Add to saved activities and set as favorite
      </Button>
    </form>
  );
}
