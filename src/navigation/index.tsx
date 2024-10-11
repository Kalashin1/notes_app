import { createBrowserRouter } from "react-router-dom";
import { SCREENS } from "./constants";
import HomePage from "../page";
import CreateNote from "../page/create";
import Note from "../page/note";
import DeletedNotes from "../page/deleted";
import EditNote from "../page/edit";

export const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: SCREENS.CREATE_NOTE,
    element: <CreateNote />,
  },
  {
    path: SCREENS.NOTE(),
    element: <Note />,
  },
  {
    path: SCREENS.TRASH,
    element: <DeletedNotes />,
  },
  {
    path: SCREENS.TRASH,
    element: <DeletedNotes />,
  },
  {
    path: SCREENS.EDIT_NOTE(),
    element: <EditNote />,
  },
]);
