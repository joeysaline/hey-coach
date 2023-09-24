import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Progress from "../components/Progress";
import CalorieCounter from "../components/CreateFood";
import { LineChart, data } from "../components/DashChart";
import { Avatar, Container, Typography } from "@mui/material";
import QuickAddActivity from "../components/QuickAddActivity";
import { useAuth } from "../user-auth/contexts/AuthContexts";

export default function Home() {
  const { currentUser } = useAuth();

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Container>
            <Typography variant="h2">Welcome,</Typography>
            <Avatar {...stringAvatar(`${currentUser.email} ${currentUser.password}`)} />
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
