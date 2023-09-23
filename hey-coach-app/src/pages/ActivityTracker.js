import React, { useEffect, useState } from "react";
import CreateActivity from "../components/CreateActivity";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import TrackedActivityList from "../components/TrackedActivityList";
import SavedActivityList from "../components/SavedActivityList";
import FavoriteActivity from "../components/FavoriteActivity";
import { useActivity } from "../contexts/ActivityContexts";

export default function ActivityTracker() {
  const [creatorMode, setCreatorMode] = useState(false);
  const { savedActivities } = useActivity();
  useEffect(() => {
    setCreatorMode(false);
  }, [savedActivities]);
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Container>
            <Typography variant="h2">Activity Tracker</Typography>
          </Container>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={10} sx={{ p: 3 }}>
            <Container>
              <Typography variant="h4">Today's Activity</Typography>
              <TrackedActivityList />
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, mb: 3 }}>
            <Container>
              <Typography variant="h5">Favorite Activity</Typography>
              <FavoriteActivity />
            </Container>
          </Paper>
          <Paper elevation={10} sx={{ p: 3 }}>
            <Container>
              <div>
                <Typography variant="h5">Saved Activities</Typography>
                {!creatorMode && (
                  <Button onClick={() => setCreatorMode(true)}>New activity</Button>
                )}
              </div>
              {creatorMode && <CreateActivity />}
              <SavedActivityList />
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
