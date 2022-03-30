import {
  Favorite,
  FavoriteBorder,
  MusicNote,
  MusicNoteOutlined,
  SentimentVerySatisfied,
  SentimentVerySatisfiedOutlined,
  Sick,
  SickOutlined,
  Tv,
  TvTwoTone,
  Whatshot,
  WhatshotOutlined,
  Work,
  WorkOutline,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Mood } from "./Mood";
import { SelectorArea } from "./MoodSelector.styles";

export const MoodSelector = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography marginBottom={1} variant="h5">
        How's your "mood"?
      </Typography>

      <SelectorArea>
        <Mood name="loving" icon={FavoriteBorder} checkedIcon={Favorite} />
        <Mood name="studying" />
        <Mood
          name="happy"
          icon={SentimentVerySatisfied}
          checkedIcon={SentimentVerySatisfiedOutlined}
        />
        <Mood name="satisfied" />
        <Mood name="sick" icon={Sick} checkedIcon={SickOutlined} />
        <Mood name="fit" />
        <Mood name="hungry" />
        <Mood name="sad" />
        <Mood name="cold" />
        <Mood name="hot" icon={WhatshotOutlined} checkedIcon={Whatshot} />
        <Mood name="zen" />
        <Mood name="TV" icon={Tv} checkedIcon={TvTwoTone} />
        <Mood name="music" icon={MusicNoteOutlined} checkedIcon={MusicNote} />
        <Mood name="work" icon={WorkOutline} checkedIcon={Work} />
        <Mood name="neutral" />
      </SelectorArea>
    </Box>
  );
};
