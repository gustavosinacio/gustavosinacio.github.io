import {
  Checkbox,
  Icon as NamedIcon,
  SvgIconTypeMap,
  Tooltip,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useMemo } from "react";
import { useMood } from "../../../contexts/moods";
import { MoodName, useMoodIcon } from "../../../lib/hooks/useMoodIcon";

interface MoodProps {
  name: MoodName;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  checkedIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export const Mood = ({
  name,
  icon: Icon,
  checkedIcon: CheckedIcon,
}: MoodProps) => {
  const iconFontSize = useMemo<"inherit" | "large" | "medium" | "small">(
    () => "large",
    []
  );

  const [moods, dispatch] = useMood();

  const handleChangeMood = (event: any, checked: boolean) => {
    if (checked) {
      dispatch({ type: "addMood", payload: name });
    } else {
      dispatch({ type: "removeMood", payload: name });
    }
  };

  const moodIconName = useMoodIcon(name);

  return (
    <Tooltip title={name}>
      <Checkbox
        checked={moods.indexOf(name) >= 0}
        onChange={handleChangeMood}
        name={name}
        icon={
          Icon ? (
            <Icon fontSize={iconFontSize} />
          ) : (
            <NamedIcon fontSize={iconFontSize}>{moodIconName}</NamedIcon>
          )
        }
        checkedIcon={
          CheckedIcon ? (
            <CheckedIcon fontSize={iconFontSize} />
          ) : (
            <NamedIcon fontSize={iconFontSize}>{moodIconName}</NamedIcon>
          )
        }
      />
    </Tooltip>
  );
};
