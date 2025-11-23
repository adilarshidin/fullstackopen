import { useState } from 'react';


const HeaderTwo = ({ headerText }) => <h2>{headerText}</h2>;
const HeaderThree = ({ headerText }) => <h3>{headerText}</h3>;

const Statistics = ({ allRating, collectedRatings }) => {
  let totalRating = 0;
  let positiveRatings = 0;
  let starCounts = {
    "⭐": 0,
    "⭐⭐": 0,
    "⭐⭐⭐": 0,
    "⭐⭐⭐⭐": 0,
    "⭐⭐⭐⭐⭐": 0
  }

  allRating.forEach((rating) => {
    totalRating = totalRating + rating
    if (rating >= 4) positiveRatings++;

    if (rating === 1) starCounts["⭐"]++;
    else if (rating === 2) starCounts["⭐⭐"]++;
    else if (rating === 3) starCounts["⭐⭐⭐"]++;
    else if (rating === 4) starCounts["⭐⭐⭐⭐"]++;
    else if (rating === 5) starCounts["⭐⭐⭐⭐⭐"]++;
  });

  const currentRating = totalRating / allRating.length;
  const positiveRatingPercentage = positiveRatings / allRating.length * 100;

  if (
    Number.isNaN(currentRating)
    && Number.isNaN(positiveRatingPercentage)
    && collectedRatings === 0
  ) {
    return (
      <p>No ratings were given yet.</p>
    )
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Current rating</th>
            <th>Collected ratings</th>
            <th>Positive rating % (4-5)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentRating.toPrecision(3)}</td>
            <td>{collectedRatings}</td>
            <td>{positiveRatingPercentage.toPrecision(3)}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>⭐</td>
            <td>{starCounts["⭐"]}</td>
          </tr>
          <tr>
            <td>⭐⭐</td>
            <td>{starCounts["⭐⭐"]}</td>
          </tr>
          <tr>
            <td>⭐⭐⭐</td>
            <td>{starCounts["⭐⭐⭐"]}</td>
          </tr>
          <tr>
            <td>⭐⭐⭐⭐</td>
            <td>{starCounts["⭐⭐⭐⭐"]}</td>
          </tr>
          <tr>
            <td>⭐⭐⭐⭐⭐</td>
            <td>{starCounts["⭐⭐⭐⭐⭐"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ onClick, buttonText }) => {
  return (
    <button className='Button' onClick={onClick}>{buttonText}</button>
  )
};

const RatingForm = ({ allRating, setAllRating, collectedRatings, setCollectedRatings }) => {
  const handleRatingSubmit = (rating) => {
    const newAllRating = allRating.concat(rating);
    const newCollectedRatings = collectedRatings + 1;
    setAllRating(newAllRating);
    setCollectedRatings(newCollectedRatings);
  };

  return (
    <div className='ratingForm'>
      <Button onClick={() => handleRatingSubmit(1)} buttonText="⭐" />
      <Button onClick={() => handleRatingSubmit(2)} buttonText="⭐⭐" />
      <Button onClick={() => handleRatingSubmit(3)} buttonText="⭐⭐⭐" />
      <Button onClick={() => handleRatingSubmit(4)} buttonText="⭐⭐⭐⭐" />
      <Button onClick={() => handleRatingSubmit(5)} buttonText="⭐⭐⭐⭐⭐" />
    </div>
  )
};

function App() {
  const [allRating, setAllRating] = useState([]);
  const [collectedRatings, setCollectedRatings] = useState(0);

  return (
    <main>
      <HeaderTwo headerText="Please leave your feedback on the UniCafe!" />
      <RatingForm allRating={allRating} setAllRating={setAllRating}
                  collectedRatings={collectedRatings} setCollectedRatings={setCollectedRatings} />      
      <HeaderThree headerText="Rating" />
      <Statistics allRating={allRating} collectedRatings={collectedRatings} />
    </main>
  )
};

export default App;
