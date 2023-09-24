import React, { useEffect, useState } from "react";
import { useActivity } from "../contexts/ActivityContexts";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Alert,
  Container,
  List,
  ListItem,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { graphicImages } from "../Graphics";

export default function CreateActivity() {
  const { activity, setActivity, saveActivity, savedActivities } =
    useActivity();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [creatorMode, setCreatorMode] = useState(false);

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
    try {
      setLoading(true);
      setError("");
      setMessage("");
      if (activity.title.trim() !== "") {
        saveActivity({ ...activity, id: uuidv4() });
        setMessage("Activity successfully created!");
        setActivity({ ...activity, title: "", rate: "", imageURL: "" });
      } else {
        throw new Error("You have enter an invalid activity!");
      }
    } catch (error) {
      setError(error);
    }
    setCreatorMode(false);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
      setError("");
    }, 3000);
  }, [savedActivities]);

  return (
    <>
      <Container sx={{ my: 1 }}>
        {message && <Alert severity="success">{message}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
      </Container>
      {creatorMode ? (
        <form onSubmit={handleSubmit}>
          <List>
            <ListItem>
              <TextField
                autoFocus
                fullWidth
                variant="standard"
                type="text"
                label="enter an activity"
                value={activity.title}
                onChange={handleActivityTitleChange}
                disabled={loading}
              />
            </ListItem>
            <ListItem>
              <TextField
                variant="standard"
                type="number"
                label="calories per hour"
                value={activity.rate}
                onChange={handleActivityRateChange}
                disabled={loading}
              />
              <Select
                value={activity.imageURL}
                label="image"
                onChange={handleImageChange}
                MenuProps={{ PaperProps: { sx: { maxHeight: "30vh" } } }}
                disabled={loading}
              >
                {graphicImages.map((img) => (
                  <MenuItem key={img.url} value={img.url}>
                    <img src={`${img.url}`} width={100} alt="activity" />
                  </MenuItem>
                ))}
              </Select>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                disabled={loading}
              >
                Add
              </Button>
              <Button onClick={() => setCreatorMode(false)}>Cancel</Button>
            </ListItem>
          </List>
        </form>
      ) : (
        <Container>
          <Button variant="contained" onClick={() => setCreatorMode(true)}>
            New
          </Button>
        </Container>
      )}
    </>
  );
}
