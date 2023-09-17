import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";

const ActivityContext = React.createContext();

export function useActivity() {
  return useContext(ActivityContext);
}

export function ActivityProvider({ children }) {
  const { currentUser } = useAuth();
  const data = [
    {
      id: 0,
      title: "Weight Lifting",
      exertionRate: 127,
      imageURL:
        "https://hey-coach-bucket.s3.us-east-2.amazonaws.com/sports-2262083_640.jpg",
    },
    {
      id: 1,
      title: "Running",
      exertionRate: 205,
      imageURL:
        "https://hey-coach-bucket.s3.us-east-2.amazonaws.com/sports-2262083_640.jpg",
    },
    {
      id: 2,
      title: "Swimming",
      exertionRate: 184,
      imageURL:
        "https://hey-coach-bucket.s3.us-east-2.amazonaws.com/swimming.jpg",
    },
  ];
  const [activity, setActivity] = useState({
    id: "",
    title: "",
    exertionRate: "",
    imageURL:
      "https://hey-coach-bucket.s3.us-east-2.amazonaws.com/sports-2262083_640.jpg",
  });
  const [activities, setActivities] = useState([]);
  const [activityTracker, setActivityTracker] = useState({
    id: "",
    date: "",
    activities: []
  });

  function createActivity(activity) {
    setActivities([...activities, activity]);
  }

  function removeActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  function addToActivityTracker(activity) {
    
  }
  const value = {
    activity,
    setActivity,
    activities,
    setActivities,
    createActivity,
    removeActivity,
  };
  //   setLoading(false);
  //   const [loading, setLoading] = useState(true);
  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  );
}
