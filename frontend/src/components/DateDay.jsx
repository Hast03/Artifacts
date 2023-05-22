import React from "react";
import styled from "styled-components";

const D = styled.div`
  .dateDay {
    font-family: "M PLUS 1 Code", sans-serif;
    color: #fff;
    font-size: 2rem;
    margin-left: 2rem;
    text-transform: lowercase;

    .day {
      font-family: "M PLUS 1 Code", sans-serif;
      color: #fff;
      text-transform: lowercase;
    }
  }
`;

const DateDay = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let d = new Date();
  let dayName = days[d.getDay()];
  let date = d.getDate();
  let monthName = month[d.getMonth()];

  return (
    <D>
      <span className="dateDay">
        <span className="day">&lt;/{dayName},</span> {date} {monthName}&gt;
      </span>
    </D>
  );
};

export default DateDay;
