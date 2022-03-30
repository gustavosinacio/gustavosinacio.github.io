export type MoodName =
  | "loving"
  | "loving_outlined"
  | "studying"
  | "happy"
  | "satisfied"
  | "sick"
  | "fit"
  | "hungry"
  | "sad"
  | "cold"
  | "hot"
  | "zen"
  | "TV"
  | "music"
  | "work"
  | "neutral";

const moodNamesToIcon = {
  loving: "favorite",
  loving_outlined: "favorite_border",
  studying: "menu_book",
  happy: "sentiment_very_satisfied",
  satisfied: "sentiment_satisfied_alt",
  sick: "sick",
  fit: "fitness_center",
  hungry: "local_dining",
  sad: "sentiment_very_dissatisfied",
  cold: "ac_unit",
  hot: "whatshot",
  zen: "self_improvement",
  TV: "tv",
  music: "music_note",
  work: "work",
  neutral: "sentiment_neutral",
};

export const useMoodIcon = (moodName: MoodName) => {
  return moodNamesToIcon[moodName];
};
