import React from "react";
import { useActivity } from "../contexts/ActivityContexts";
import TrackedActivity from "./TrackedActivity";

export default function TrackedActivityList() {
  const { trackedActivities } = useActivity();

  return (
    <>
      {trackedActivities.length === 0
        ? "You haven't added any activities yet!"
        : trackedActivities.map((activity) => (
            <TrackedActivity key={activity.id} props={activity} />
          ))}
    </>
  );
}