import diaryData from '../../data/entries.ts';
import {
  DiaryEntry,
  NonSensitiveDiaryEntry,
  NewDiaryEntry
} from '../types';

const getEntries = (): DiaryEntry[] => {
  return diaryData;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaryData.map(({ id, date, weather, visibility }) => ({
    id, date, weather, visibility
  }));
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaryData.find(entry => entry.id === id);
  return entry;
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newEntry = {
    id: Math.max(...diaryData.map(entry => entry.id)) + 1,
    ...entry
  };

  diaryData.push(newEntry);
  return newEntry;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById
};
