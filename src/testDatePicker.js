// import { DatePicker } from '@mui/lab';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './App.css'


function TestDatePicker() {
  const [selectedDate, SetSelectedDate] = useState(null)
  return (
    <div className='App'>
      <DatePicker 
      selected={selectedDate}
       onChange={date => SetSelectedDate(date)} />
    </div>
  );
}

export default TestDatePicker
