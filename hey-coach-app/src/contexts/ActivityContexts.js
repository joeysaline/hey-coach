import React, { useContext, useState } from "react";
import { v4 } from "uuid";
// import { useAuth } from "../user-auth/contexts/AuthContexts";

const ActivityContext = React.createContext();

export function useActivity() {
  return useContext(ActivityContext);
}

export function ActivityProvider({ children }) {
  // const { currentUser } = useAuth();
  // const data = [
  //   {
  //     id: 0,
  //     title: "Weight Lifting",
  //     rate: 127,
  //     imageURL:
  //       "https://hey-coach-bucket.s3.us-east-2.amazonaws.com/sports-2262083_640.jpg",
  //   },
  //   {
  //     id: 1,
  //     title: "Running",
  //     rate: 205,
  //     imageURL:
  //       "https://hey-coach-bucket.s3.us-east-2.amazonaws.com/sports-2262083_640.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Swimming",
  //     rate: 184,
  //     imageURL:
  //       "https://hey-coach-bucket.s3.us-east-2.amazonaws.com/swimming.jpg",
  //   },
  // ];
  const [activity, setActivity] = useState({
    id: "",
    title: "",
    rate: "",
    imageURL: "",
  });
  const [savedActivities, setSavedActivities] = useState([]);
  const [trackedActivities, setTrackedActivities] = useState([]);
  const [favoriteActivity, setFavoriteActivity] = useState({
    id: "",
    title: "",
    rate: "",
    imageURL: "",
  });

  function saveActivity(activity) {
    setSavedActivities([...savedActivities, activity]);
  }
  function unsaveActivity(id) {
    setSavedActivities(
      savedActivities.filter((activity) => activity.id !== id)
    );
  }
  function trackActivity(activity) {
    setTrackedActivities([...trackedActivities, { ...activity, id: v4(), total: activity.rate * activity.hours }]);
  }
  function untrackActivity(id) {
    setTrackedActivities(
      trackedActivities.filter((activity) => activity.id !== id)
    );
  }
  function favorite(activity) {
    setFavoriteActivity(activity);
  }
  const value = {
    activity,
    setActivity,
    savedActivities,
    setSavedActivities,
    trackedActivities,
    setTrackedActivities,
    favoriteActivity,
    setFavoriteActivity,
    favorite,
    saveActivity,
    unsaveActivity,
    trackActivity,
    untrackActivity,
  };
  //   setLoading(false);
  //   const [loading, setLoading] = useState(true);
  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  );
}
