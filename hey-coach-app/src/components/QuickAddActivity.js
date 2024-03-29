import React, { useEffect, useState } from "react";
import { useActivity } from "../contexts/ActivityContexts";
import { Alert, Button, Slider, Typography } from "@mui/material";
import QuickAddActivitySetup from "./QuickAddActivitySetup";
export default function QuickAddActivity() {
  const { favoriteActivity, trackActivity, trackedActivities } = useActivity();
  const [creatorMode, setCreatorMode] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [hours, setHours] = useState(1);

  useEffect(() => {
    setCreatorMode(false);
  }, [favoriteActivity]);

  function handleClick(e) {
    e.preventDefault();
    try {
      trackActivity({ ...favoriteActivity, hours: hours });
      setMessage("Activity successfully tracked!");
      setHours(1);
    } catch (error) {
      setError(error);
    }
  }

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

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
      setError("");
    }, 3000);
  }, [trackedActivities]);

  return (
    <>
      <h3>Quick add activity</h3>
      {error && <Alert severity="error">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}
      {favoriteActivity.title === "" ? (
        <div>
          Set up quick add to instantly track calories from your favorite
          activity.
          <Button onClick={() => setCreatorMode(true)}>Set up now!</Button>
          <div>{creatorMode && <QuickAddActivitySetup />}</div>
        </div>
      ) : (
        <div>
          <img src={favoriteActivity.imageURL} width={250} height={250} alt="activity" />
          <Typography variant="h5">{favoriteActivity.title}</Typography>
          <Typography variant="p">{favoriteActivity.rate} calories per hour</Typography>
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
          <Button variant="contained" onClick={handleClick}>
            Track
          </Button>
        </div>
      )}
    </>
  );
}
