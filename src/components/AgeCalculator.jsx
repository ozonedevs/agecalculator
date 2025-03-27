import { useState } from 'react';
import AgeForm from './AgeForm';
import AgeDisplay from './AgeDisplay';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '' });
  const [currentAge, setCurrentAge] = useState(null);

  const today = new Date();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  // This is a function calculate the last day of the following month based on the year and month provided.
  const maxDayForMonth = (year, month) => {
    if (!year || !month) return 31;
    return new Date(year, month, 0).getDate();
  };

  // calculateMaxDay is a function that calculates the last day of the month based on the year and month provided.
  const calculatedMaxDay = maxDayForMonth(birthDate.year, birthDate.month);

  const calculateAge = () => {
    const { year, month, day } = birthDate;
    let birthMonth = parseInt(month, 10);
    let birthYear = parseInt(year, 10);
    let birthDay = parseInt(day, 10);

    if (
      birthYear <= 1900 ||
      birthDay < 1 ||
      birthDay > 31 ||
      birthMonth > 12 ||
      birthMonth < 1
    ) {
      return;
    }

    let age = currentYear - birthYear;

    if (
      birthMonth > currentMonth ||
      (birthMonth === currentMonth && birthDay > currentDay)
    ) {
      age--;
    }

    setCurrentAge(age);

    birthDate.year = '';
    birthDate.month = '';
    birthDate.day = '';
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <AgeForm
        year={birthDate.year}
        month={birthDate.month}
        day={birthDate.day}
        onSubmit={(e) => {
          e.preventDefault();
          calculateAge();
        }}
        onYearChange={(e) =>
          setBirthDate({ ...birthDate, year: e.target.value })
        }
        onMonthChange={(e) =>
          setBirthDate({ ...birthDate, month: e.target.value })
        }
        onDayChange={(e) => setBirthDate({ ...birthDate, day: e.target.value })}
        currentYear={currentYear}
        maxDay={calculatedMaxDay}
      />

      <AgeDisplay userAge={currentAge} />
    </div>
  );
}

export default AgeCalculator;
