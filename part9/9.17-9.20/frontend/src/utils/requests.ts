import { DiaryEntry, NewDiaryEntry, DiariesArray, DiarySchema } from "../types";

const getDiaryEntriesRequest = async (): Promise<DiaryEntry[]> => {
  const response = await fetch("http://localhost:3000/api/diaries");
  try {
    return DiariesArray.parse(await response.json());
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error(`Unknown error: ${error}`);
  }
};

const addDiaryRequest = async (diary: NewDiaryEntry): Promise<DiaryEntry> => {
  const response = await fetch("http://localhost:3000/api/diaries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(diary),
  });
  try {
    return DiarySchema.parse(await response.json());
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error(`Unknown error: ${error}`);
  }
};

export { getDiaryEntriesRequest, addDiaryRequest };
