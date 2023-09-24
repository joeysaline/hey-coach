import React, { useState } from "react";
import { useActivity } from "../contexts/ActivityContexts";
import { Alert, Button, Slider } from "@mui/material";

export default function FavoriteActivity() {
  const { favoriteActivity, trackActivity } = useActivity();
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
      trackActivity({ ...favoriteActivity, hours: hours });
      setMessage(`${favoriteActivity.title} successfully tracked!`);
    } catch (error) {
      setError(error);
    }
    resetMessages();
    setHours(1);
    setNeedHours(false);
  }
  function SelectHours() {
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
        <Button variant="contained" onClick={handleClick}>Confirm</Button>
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
  return (
    <>
      {favoriteActivity.title === "" ? (
        <div>Oh no! You haven't chosen a favorite activity yet.</div>
      ) : (
        <div>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
          <img src={favoriteActivity.imageURL} width={250} alt="activity" />
          <h4>{favoriteActivity.title}</h4>
          <p>{favoriteActivity.rate} calories per hour</p>
          {needHours ? (
            <SelectHours />
          ) : (
            <Button variant="contained" onClick={() => setNeedHours(true)}>Track</Button>
          )}
        </div>
      )}
    </>
  );
}
