import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import ViewAgendaSharpIcon from "@mui/icons-material/ViewAgendaSharp";

interface Props {
  onChange: (event: React.MouseEvent<HTMLElement>, nextView: string) => void;
  view?: string;
}

export const ChangeViewButton = ({ onChange, view = "list" }: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <ToggleButtonGroup
        color="primary"
        value={view}
        exclusive
        onChange={onChange}
      >
        <ToggleButton value="list">
          <ViewAgendaSharpIcon />
        </ToggleButton>
        <ToggleButton value="card">
          <GridViewSharpIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
