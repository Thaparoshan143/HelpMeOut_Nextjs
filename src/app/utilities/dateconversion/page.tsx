'use client'

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css"
import styled from 'styled-components';

export default function DateConversion() 
{
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState<string>("")

  function onDateChange(value : any)
  {
    console.log(value)
    setValue(value)
    console.log(date)
  }

  return (
    <div className="w-full flex flex-col justify-around items-center">
      <h1 className="text-heading md:text-sup-head text-theme font-bold font-main uppercase underline mb-10">Date Conversion</h1>
      <div className="flex md:flex-row flex-col justify-evenly items-center md:items-start w-full">
        <CalendarWrapper>
          <h1 className="text-center text-heading my-4 text-theme font-bold">English</h1>
          <Calendar 
              className="p-2 border-none "
              onChange={(e)=>onDateChange(e)}
              value={value} 
          />
        </CalendarWrapper>
        <NepaliCalendarWrapper className="flex flex-col justify-evenly items-center">
          <h1 className="text-center text-heading my-4 text-theme font-bold">Nepali</h1>
          <NepaliDatePicker 
              inputClassName="form-control"
              className="my-2 text-black"
              value={date}
              onChange={(value: string) => setDate(value)}
              options={{ calenderLocale: "ne", valueLocale: "en" }} 
          />
        </NepaliCalendarWrapper>
      </div>
    </div>
  );
}

const CalendarWrapper = styled.div`
  /* ~~~ container styles ~~~ */
  font-size : 1.05rem;
  color : black;

  .react-calendar {
  border : none !important;
  border-radius: 15px;
  }

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      color : #A020F0;
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.30;
      color : #A020F0;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

    /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    border-radius: 3px;
    transition : all 0.2s ease-in;

    &:hover {
      background-color: #A020F077;
    }

    &:active {
      background-color: #EA5A0C;
    }
  }

  abbr[title] {
    font-weight : bold;
    color : #A020F0;
    text-decoration : none;
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 

    .react-calendar__tile {
      max-width: initial !important;
    }
    .react-calendar__tile--active {
      background : #A020F0;
    }
  }

  .react-calendar__month-view__days__day--weekend {
    color: #000;
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.6;
  }

  // /* ~~~ active day styles ~~~ */
  .react-calendar__tile--now  {
    background : #EA5A0C;
  }  
`;

const NepaliCalendarWrapper = styled.div`
  /* ~~~ container styles ~~~ */
  font-size : 1.25rem;

  .form-control {
    color : #A020F0;
    font-weight : bold;
    text-align : center;
  }

  .nepali-date-picker {

    .calendar-wrapper {
      .selected {
        font-weight : bold;
        background : #A020F0 !important;
        border-radius : 3px;
      }

      .today {
        background : #EA5A0C;
        color : white !important;
      }

      .month-day {
        color : #000;
      }

      table > thead {
        color : #A020F0;
        font-weight : bold;
      }
    }

    .calendar-controller, .icon  {
      color : #A020F0 !important;
      font-weight : bold;
    }

    svg[Attributes Style] {
      color : #A020F0
    }
  }

  .nepali-date-picker .calender td.month-day.selected::after, .nepali-date-picker .calender td.month-day.today::before  {
    background : none;
    border-radius : 0;
  }
`;