import React from "react";
import {
  Button,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useActivity } from "../contexts/ActivityContexts";
import EventButton from "./EventButton";

export default function TrackedActivity({ props }) {
  const { untrackActivity } = useActivity();

  return (
    <>
      <Paper variant="outlined" sx={{ p: 3, my: 1 }}>
        <ListItem>
          <img src={props.imageURL} width={200} alt="activity" />
          <ListItemText
            primary={
              <Typography variant="h5">
                {props.hours < 1 ? (
                  <>{props.hours * 60} minutes</>
                ) : props.hours === 1 ? (
                  <>{props.hours} hour</>
                ) : (
                  <>{props.hours} hours</>
                )}
              </Typography>
            }
            secondary={<Typography variant="p">{props.title}</Typography>}
          />
          <ListItemText
            primary={
              <Typography variant="h5">
                {props.hours * props.rate} calories
              </Typography>
            }
          />
        </ListItem>
        
        <Button>Edit</Button>
        <EventButton
          title={"Untrack"}
          click={untrackActivity}
          clickValue={props.id}
          feedback={`${props.title} for ${props.hours} untracked.`}
        />
      </Paper>
    </>
  );
}
