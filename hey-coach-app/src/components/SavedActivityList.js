import React from "react";
import { useActivity } from "../contexts/ActivityContexts";
import SavedActivity from "./SavedActivity";
import { DialogContent, List } from "@mui/material";

export default function SavedActivities() {
  const { savedActivities } = useActivity();

  return (
    <DialogContent sx={{maxHeight: "50vh", paddingX: "0"}}>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {savedActivities.map((activity) => (
          <SavedActivity key={activity.id} props={activity} />
        ))}
      </List>
    </DialogContent>
    // <>
    //   {savedActivities.length === 0 ? (
    //     <p>You haven't saved any activities yet.</p>
    //   ) : (
    //     <List sx={{ maxHeight: "50vh", overflow: "auto" }}>
    //       {savedActivities.map((activity) => (
    //         <SavedActivity key={activity.id} props={activity} />
    //       ))}
    //     </List>
    //   )}
    // </>
  );
}
