import React from "react";
import { Grid, Container, Box, Button } from "@material-ui/core";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskCreator } from "./components/TaskCreator/TaskCreator";
import Add from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { fetchTasksRequest } from "./reducers/actions";

interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  React.useEffect(() => {
    console.log(props);
  }, []);

  const store = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  console.log(store);

  return (
    <>
      <Container maxWidth="sm">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item={true} xs={12}>
            {/* <TaskCreator /> */}
            <Box alignSelf="center">
              <Button
                onClick={() => dispatch(fetchTasksRequest)}
                variant="contained"
                color="primary"
              >
                <Add />
              </Button>
            </Box>
          </Grid>
          <Grid item={true} xs={12}>
            <TaskList taskLists={[]} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
