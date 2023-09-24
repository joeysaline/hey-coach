import React from "react";
import { useActivity } from "../contexts/ActivityContexts";
import TrackedActivity from "./TrackedActivity";
import { DialogContent, List } from "@mui/material";

export default function TrackedActivityList() {
  const { trackedActivities } = useActivity();

  return (
    <>
      <DialogContent>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          {trackedActivities.length === 0
            ? "You haven't added any activities yet!"
            : trackedActivities.map((activity) => (
                <TrackedActivity key={activity.id} props={activity} />
              ))}
        </List>
      </DialogContent>
    </>
  );
}
