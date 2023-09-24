import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import TrackedActivityList from "../components/TrackedActivityList";
import SavedActivityList from "../components/SavedActivityList";
import FavoriteActivity from "../components/FavoriteActivity";
import CreateActivity from "../components/CreateActivity";

export default function ActivityTracker() {
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
              <Typography variant="h3">Today's Activity</Typography>
              <TrackedActivityList />
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, mb: 3 }}>
            <Container>
              <Typography variant="h4">Favorite Activity</Typography>
              <FavoriteActivity />
            </Container>
          </Paper>
          <Paper elevation={10} sx={{ p: 3 }}>
            <Container>
              <Typography variant="h4">Saved Activities</Typography>
            </Container>
            <CreateActivity />
            <SavedActivityList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
