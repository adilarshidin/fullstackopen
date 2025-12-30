import { z } from "zod";

enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Stormy = "stormy",
  Windy = "windy",
}

enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

const DiarySchema = z.object({
  id: z.number(),
  date: z.iso.date(),
  weather: z.enum(Weather),
  visibility: z.enum(Visibility),
});
type DiaryEntry = z.infer<typeof DiarySchema>;
type NewDiaryEntry = Omit<DiaryEntry, "id">;

const DiariesArray = z.array(DiarySchema);

export {
  Weather,
  Visibility,
  DiarySchema,
  DiaryEntry,
  NewDiaryEntry,
  DiariesArray,
};
