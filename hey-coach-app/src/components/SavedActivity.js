import React, { useState } from "react";
import { Alert, Button, Slider } from "@mui/material";
import { useActivity } from "../contexts/ActivityContexts";

export default function SavedActivity({ props }) {
  const { trackActivity, unsaveActivity, favorite } = useActivity();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [needHours, setNeedHours] = useState(false);
  const [hours, setHours] = useState(1);

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
      setMessage("Activity successfully tracked!");
      setHours(1);
      setNeedHours(false);
    } catch (error) {
      setError(error);
    }
  }

  function SelectHours() {
    setMessage('');
    setError('');
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

  return (
    <>
      <div>
        {error && <Alert severity="error">{error}</Alert>}
        {message && <Alert severity="success">{message}</Alert>}
        <img src={props.imageURL} width={100} alt="activity" />
        <label>{props.title}</label>
        {needHours ? (
          <SelectHours />
        ) : (
          <>
            <Button onClick={() => setNeedHours(true)}>Track</Button>
            <Button onClick={() => favorite(props)}>Favorite</Button>
            <Button onClick={() => unsaveActivity(props.id)}>Delete</Button>
          </>
        )}
      </div>
    </>
  );
}
