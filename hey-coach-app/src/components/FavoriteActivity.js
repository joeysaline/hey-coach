import React from "react";
import { useActivity } from "../contexts/ActivityContexts";
import { Button } from "@mui/material";

export default function FavoriteActivity() {
  const { favoriteActivity, trackActivity } = useActivity();
  return (
    <>
      {favoriteActivity.title === "" ? (
        <div>Oh no! You haven't chosen a favorite activity yet.</div>
      ) : (
        <div>
          <img src={favoriteActivity.imageURL} width={250} alt="activity" />
          <label>{favoriteActivity.title}</label>
          <label>: {favoriteActivity.rate} calories per hour</label>
          <Button onClick={() => trackActivity(favoriteActivity)}>Track</Button>
        </div>
      )}
    </>
  );
}
