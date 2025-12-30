import { z } from "zod";
import { useState, useEffect } from "react";

import { DiaryEntry, Weather, Visibility, DiarySchema } from "./types";
import { getDiaryEntriesRequest, addDiaryRequest } from "./utils/requests";

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [dateInput, setDate] = useState("");
  const [commentInput, setComment] = useState("");

  useEffect(() => {
    const getDiaryEntries = async () => {
      const diaries = await getDiaryEntriesRequest();
      setDiaries(diaries);
    };
    getDiaryEntries();
  }, []);

  const weatherList = [...Object.values(Weather)];
  const visibilityList = [...Object.values(Visibility)];
  const [weatherInput, setWeather] = useState(weatherList[0]);
  const [visibilityInput, setVisibility] = useState(visibilityList[0]);

  if (!diaries) return <div>Loading...</div>;

  const handleDateInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDate(event.target.value);
  const handleWeatherInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const weatherString = event.target.value;
    const weather = z.enum(Weather).parse(weatherString);
    setWeather(weather);
  };
  const handleVisibilityInput = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const visibilityString = event.target.value;
    const visibility = z.enum(Visibility).parse(visibilityString);
    setVisibility(visibility);
  };
  const handleCommentInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setComment(event.target.value);

  const handleAddDiary = (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const newDiary = {
        date: dateInput,
        weather: weatherInput,
        visibility: visibilityInput,
        comment: commentInput,
      };
      DiarySchema.omit({ id: true }).parse(newDiary);
      addDiaryRequest(newDiary);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      alert(`Unknown error: ${error}`);
    }
  };

  return (
    <div>
      <h2>Flight diaries</h2>
      {diaries.map((diary) => (
        <div key={diary.id}>
          <p>date: {diary.date}</p>
          <p>weather: {diary.weather}</p>
          <p>visibility: {diary.visibility}</p>
        </div>
      ))}
      <form onSubmit={handleAddDiary}>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" onChange={handleDateInput} />
        <label htmlFor="weather">Weather</label>
        <select id="weather" onChange={handleWeatherInput}>
          {weatherList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="visibility">Visibility</label>
        <select id="visibility" onChange={handleVisibilityInput}>
          {visibilityList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="comment">Comment</label>
        <input id="comment" type="text" onChange={handleCommentInput} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
