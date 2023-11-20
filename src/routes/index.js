import { lazy } from "react";

const DashboardLayout = lazy(() => import("../container"))
const Dashboard = lazy(() => import("../pages/Dashboard"));
//Dashboard Routes
const DASHBOARD_ROUTES = [
    {
        index: true,
        element: <Dashboard />,
    },
];
const dashboardRoutes = [
    {
        path: "/",
        element: <DashboardLayout />,

        children: [
            ...DASHBOARD_ROUTES,
            {
                path: "Accounts",
                element: <Dashboard />,
            },
            {
                path: "Payroll",
                element: <Dashboard />,
            },
            {
                path: "Reports",
                element: <Dashboard />,
            },
            {
                path: "Advisor",
                element: <Dashboard />,
            },
            {
                path: "Contacts",
                element: <Dashboard />,
            },
            {
                path: "*",
                element: <h1>404</h1>,
            },
        ],
    },
];
export default dashboardRoutes


