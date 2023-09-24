import React from "react";
import { Button } from "@mui/material";
import { useActivity } from "../contexts/ActivityContexts";
import EventButton from "./EventButton";

export default function TrackedActivity({ props }) {
  const { untrackActivity } = useActivity();

  return (
    <>
      <div>
        <img src={props.imageURL} width={200} height={150} alt="activity" />
        <label>{props.title}</label>
        <Button>Edit</Button>
        <EventButton title={'Untrack'} click={untrackActivity} clickValue={props.id} feedback={`${props.title} for ${props.hours} untracked.`} />
        {/* <Button onClick={() => untrackActivity(props.id)}>Untrack</Button> */}
        <label>{props.hours}{props.hours === 1? ' hour ': ' hours '}Total: {props.hours * props.rate} calories </label>
      </div>
    </>
  );
}
