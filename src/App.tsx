import React from "react";
import {
  Grid,
  Container,
} from "@material-ui/core";
import { TaskList } from "./components/TaskList/TaskList"
import { TaskCreator } from "./components/TaskCreator/TaskCreator";

const App = () => {
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

export default App;
