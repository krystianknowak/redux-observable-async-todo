import React from "react";
import { Grid, Container } from "@material-ui/core";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskCreator } from "./components/TaskCreator/TaskCreator";

import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { RootState } from "./store";
import { TaskInterface } from "./types/appTypes";

interface AppProps {
  tasks: TaskInterface[];
  isProgress: boolean;
}

const AppContainer: React.FC<AppProps> = (props: AppProps) => {
  React.useEffect(() => {
    console.log(props);
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item={true} xs={12}>
            <TaskCreator />
          </Grid>
          <Grid item={true} xs={12}>
            <TaskList taskLists={[]} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  tasks: state.tasks.tasks,
  isProgress: state.tasks.isProgress
});

// const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, props: OwnProps) => ({});

export const App = connect(mapStateToProps)(AppContainer);
