import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Progress from "../components/Progress";
import CalorieCounter from "../components/CreateFood";
import { LineChart, data } from "../components/DashChart";
import { Container, Typography } from "@mui/material";
import QuickAddActivity from "../components/QuickAddActivity";
import { useAuth } from "../user-auth/contexts/AuthContexts";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Container>
            <Typography variant="h2">Welcome, {currentUser.email}</Typography>
          </Container>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={10} sx={{ p: 3 }}>
            <Container>
              <Progress data={data.datasets[0].data} />
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={10} sx={{ p: 3 }}>
            <Container>
              <h2>Your Weekly Summary</h2>
              <Paper elevation={5} sx={{ p: 3 }}>
                <LineChart></LineChart>
              </Paper>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 3 }}>
            <CalorieCounter />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 3 }}>
            <Container>
              <QuickAddActivity />
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
