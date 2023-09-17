import { useAuth } from "../user-auth/contexts/AuthContexts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import DayCard from "./DayCard";

export default function Calendar() {
  const today = getTodaysDate(new Date());
  const [selected, setSelected] = useState(new Date());
  const { currentUser } = useAuth();
  const [day, setDay] = useState(null);
  const [netCalories, setNetCalories] = useState(0);

  function getTodaysDate(date) {
    date.setMilliseconds(0);
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    return date;
  }

  useEffect(() => {
    function getDay(dateSelected) {
      axios
        .request({
          method: "POST",
          url: `http://${process.env.REACT_APP_SERVER_ADDRESS}:${process.env.REACT_APP_SERVER_PORT}/getByDay`,
          data: {
            email: currentUser.email,
            day: getTodaysDate(new Date()),
          },
        })
        .then(function (response) {
          if (!response.data) {
            console.log("no results for this day :(");
          } else {
            let caloriesIn = response.data.caloriesIn;
            let caloriesOut = response.data.caloriesOut;

            if (!response) {
              caloriesIn = 0;
              caloriesOut = 0;
            }
            //todo: right here we have the data
            setNetCalories(caloriesIn - caloriesOut);
            console.log("todays calories= " + netCalories);
            setDay(response.data.day);
          }
        })
        .catch(function (error) {
          // setActivities("error");
        });
    }
    getDay(selected);
  }, [selected]);

  let footer = <p>Please pick a day.</p>;
  if (day) footer = <p>results are: {day.caloriesIn} </p>;
  if (selected) footer = <p>You picked {format(selected, "PP")}.</p>;

  return (
    <h1>
      {/*Your net calories today: {netCalories}*/}
      <DayCard CaloriesIn={netCalories} />
    </h1>
  );
}
