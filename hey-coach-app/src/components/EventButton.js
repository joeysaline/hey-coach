import React, { useState } from "react";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function EventButton({
  title,
  click,
  clickValue,
  feedback,
}) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setMessage("");
      setError("");
      click(clickValue);
      setMessage(feedback);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const handleClose = () => {
    setMessage("");
    setError("");
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Button onClick={handleClick} disabled={loading}>
        {title ? title : "empty button"}
      </Button>
      <Snackbar
          open={message}
          autoHideDuration={3000}
          onClose={handleClose}
          action={action}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
        <Snackbar
          open={error}
          autoHideDuration={3000}
          onClose={handleClose}
          action={action}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
    </>
  );
}
