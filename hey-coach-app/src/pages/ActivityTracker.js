import React from "react";
import ActivityList from "../components/ActivityList";
import CreateActivity from "../components/CreateActivity";
import { Container, Grid, Paper, Typography } from "@mui/material";

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
              <Typography variant="h4">Today's Activity</Typography>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, mb:3 }}>
            <Container>
              <Typography variant="h5">Favorite Activity</Typography>
              <ActivityList />
            </Container>
          </Paper>
          <Paper elevation={10} sx={{ p: 3 }}>
            <Container>
              <Typography variant="h5">Saved Activities</Typography>
              <CreateActivity />
              <ActivityList />
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
