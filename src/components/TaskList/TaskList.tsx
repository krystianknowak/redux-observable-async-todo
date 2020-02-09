import React from "react";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TaskInterface } from "../../types/appTypes";

interface TaskListProps {
  taskLists: TaskInterface[];
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export const TaskList: React.FC<TaskListProps> = props => {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      {[0, 1, 2, 3].map(value => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <Checkbox edge="end" checked={true} />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
