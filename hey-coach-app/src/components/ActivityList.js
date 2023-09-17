import React from "react";
import { useActivity } from "../contexts/ActivityContexts";
import Activity from "./Activity";

export default function ActivityList() {
  const { activities } = useActivity();

  return (
    <>
      {activities.map((activity) => (
        <Activity key={activity.id} props={activity} />
      ))}
    </>
  );
}
