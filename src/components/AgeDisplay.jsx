/* eslint-disable react/prop-types */
const AgeDisplay = ({ userAge }) => {
  return (
    <div>
      <h3>{userAge ? `Your current age is: ${userAge}` : ''}</h3>
      {/* {userAge} */}
    </div>
  );
};

export default AgeDisplay;
