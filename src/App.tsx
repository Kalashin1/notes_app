import {router } from './navigation/index'
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
