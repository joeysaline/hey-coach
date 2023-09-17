import * as React from "react";
import { LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Progress(data) {
  // const consumed = data.data[0];
  const consumed = 1700;
  const goal = 2000;
  const limit = goal * 1.5;
  return (
    <>
      <h2 className="text-center">Today's Calories</h2>
      <Grid container>
        <Grid item xs={1}>
          0
        </Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={1} className="text-end">
          {goal}
        </Grid>
      </Grid>
      <LinearProgress
        color="primary"
        variant="determinate"
        value={consumed / goal * 100}
        // value={(consumed / limit) * 100}
      ></LinearProgress>
      {consumed > goal ? (
        <div>
          You have exceeded your daily calorie goal by {consumed - goal}
          {" with a total consumption of "}
          {consumed} calories.
        </div>
      ) : (
        <div>
          You are below your daily calories with {goal - consumed}
          {" calories to go!"}
        </div>
      )}
    </>
  );
}
