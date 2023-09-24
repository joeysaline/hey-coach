import React, { useState } from "react";
import {
  Alert,
  Avatar,
  Button,
  ClickAwayListener,
  Container,
  Divider,
  ListItemButton,
  Slider,
  Typography,
} from "@mui/material";
import { useActivity } from "../contexts/ActivityContexts";
import EventButton from "./EventButton";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export default function SavedActivity({ props }) {
  const { trackActivity, unsaveActivity, favorite } = useActivity();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [needHours, setNeedHours] = useState(false);
  const [hours, setHours] = useState(1);
  const [open, setOpen] = useState(false);

  const marks = [
    {
      value: 1,
      label: "1 hour",
    },
    {
      value: 2,
      label: "2 hours",
    },
    {
      value: 3,
      label: "3 hours",
    },
    {
      value: 4,
      label: "4 hours",
    },
  ];

  function valuetext(value) {
    return `${value} hours`;
  }

  function handleClick(e) {
    e.preventDefault();
    try {
      trackActivity({ ...props, hours: hours });
      setMessage(`${props.title} successfully tracked!`);
    } catch (error) {
      setError(error);
    }
    resetMessages();
    setHours(1);
    setNeedHours(false);
  }

  function SelectHours() {
    setMessage("");
    setError("");
    return (
      <>
        <Slider
          aria-label="Select time length"
          defaultValue={1}
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          step={0.25}
          min={0.25}
          max={4}
          marks={marks}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
        />

        <Button onClick={handleClick}>Confirm</Button>
        <Button onClick={() => setNeedHours(false)}>Cancel</Button>
      </>
    );
  }

  function resetMessages() {
    setTimeout(() => {
      setMessage("");
      setError("");
    }, 3000);
  }
  function Options() {
    return (
      <>
        {needHours ? (
          <SelectHours />
        ) : (
          <div>
            <Button onClick={() => setNeedHours(true)}>Track</Button>
            <EventButton
              title="Favorite"
              click={favorite}
              clickValue={props}
              feedback={`${props.title} marked as favorite.`}
            />
            <Button onClick={() => unsaveActivity(props.id)}>Delete</Button>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div>
          <Container>
            {error && <Alert severity="error">{error}</Alert>}
            {message && <Alert severity="success">{message}</Alert>}
          </Container>
          <ListItem alignItems="flex-start">
            <ListItemButton onClick={() => setOpen((prev) => !prev)}>
              <ListItemAvatar>
                <Avatar alt={props.title} src={props.imageURL} />
              </ListItemAvatar>
              <ListItemText
                primary={props.title}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {props.rate} calories per hour
                    </Typography>
                  </>
                }
              />
            </ListItemButton>
          </ListItem>
          <Container>{open && <Options />}</Container>
        </div>
      </ClickAwayListener>
      <Divider variant="inset" component="li" />
    </>
  );
}
