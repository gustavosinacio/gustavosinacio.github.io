import { createReducerContext } from "react-use";

type Action = {
  type: "addMood" | "removeMood" | "clearMoods";
  payload: string;
};

const reducer = (state: string[], action: Action) => {
  switch (action.type) {
    case "addMood": {
      return [...state, action.payload];
    }
    case "removeMood": {
      const indexOfMood = state.indexOf(action.payload || "");
      const newMoods = [...state];
      newMoods.splice(indexOfMood, 1);
      return newMoods;
    }
    case "clearMoods": {
      return [];
    }
    default:
      throw new Error("Wrong moodContext type");
  }
};

const initialState: string[] = [];

export const [useMood, MoodProvider] = createReducerContext(
  reducer,
  initialState
);
