import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const MainContainer = lazy(() => import("./components/MainContainer"));
const WatchPage = lazy(() => import("./components/WatchPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <MainContainer />
          </Suspense>
        ),
      },
      {
        path: "watch",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <WatchPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
