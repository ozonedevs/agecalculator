/* eslint-disable react/prop-types */
// import React from 'react';

const AgeForm = ({
  year,
  month,
  day,
  onSubmit,
  onYearChange,
  onMonthChange,
  onDayChange,
  currentYear,
  maxDay,
}) => {
  const formStyle = {
    marginBottom: '20px',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '5px',
  };

  const inputStyle = {
    width: '100px',
    padding: '8px',
    marginBottom: '10px',
    marginRight: '10px',
    boxSizing: 'border-box',
  };

  return (
    <div>
      <form onSubmit={onSubmit} style={formStyle}>
        <input
          type="number"
          placeholder="Year"
          onChange={onYearChange}
          value={year}
          min={1900}
          max={currentYear}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Month"
          onChange={onMonthChange}
          value={month}
          min={1}
          max={12}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Day"
          onChange={onDayChange}
          value={day}
          min={1}
          max={maxDay}
          style={inputStyle}
        />

        <button type="submit"> Calculate Age</button>
      </form>
    </div>
  );
};

export default AgeForm;
