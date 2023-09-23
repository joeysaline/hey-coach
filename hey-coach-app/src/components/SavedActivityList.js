import React from "react";
import { useActivity } from "../contexts/ActivityContexts";
import SavedActivity from "./SavedActivity";
import { List } from "@mui/material";
import CreateActivity from "./CreateActivity";

export default function SavedActivities() {
  const { savedActivities } = useActivity();

  return (
    <>
      {savedActivities.length === 0 ? (
        <>
        <div>
          You haven't saved any activities yet.
        </div>
        <CreateActivity />
        </>
      ) : (
        <List sx={{maxHeight: '45vh', overflow: 'auto'}}>
          {savedActivities.map((activity) => (
            <SavedActivity key={activity.id} props={activity} />
          ))}
        </List>
      )}
    </>
  );
}
