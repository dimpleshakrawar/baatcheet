import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

//importing components 
const Login = lazy(() => import('../pages/Login/Login'));

export const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<p>Loading...</p>}>
                <Login/>
            </Suspense>
            ),
        // loader: ,
        // children: [
        //   {
        //     path: "team",
        //     element: <Team />,
        //     loader: teamLoader,
        //   },
        // ],
      },
      {
        path: "*",
        element: <p>Oops! page not found</p>
      }
])