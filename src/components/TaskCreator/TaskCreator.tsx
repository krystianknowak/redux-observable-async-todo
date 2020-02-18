import React from "react";
import { Button, TextField, Box } from "@material-ui/core";
import Add from "@material-ui/icons/Add";

interface TaskCreatorProps {}

export const TaskCreator: React.FC<TaskCreatorProps> = props => {
  const [newTaskDescription, setNewTaskDescription] = React.useState<string>(
    ""
  );

  const handleTaskDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskDescription(event.target.value);
  };

  return (
    <Box p={5} display={"flex"}>
      <Box>
        <TextField
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
          value={newTaskDescription}
          onChange={handleTaskDescChange}
          style={{ marginRight: "20px" }}
        />
      </Box>
      <Box alignSelf="center">
        <Button variant="contained" color="primary">
          <Add />
        </Button>
      </Box>
    </Box>
  );
};
