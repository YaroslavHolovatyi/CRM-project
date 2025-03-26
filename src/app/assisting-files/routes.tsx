import MainPage from "../components/main-part/main-page.component";
import Startup from "../components/startup-page/startup.component";
import Survey from "../components/startup-page/survey/survey.component";


export const routes = [
        {
            path: 'welcome',
            element: <MainPage />,
            children: []
        },
        {
            path: '/',
            element: <Startup />,
            children: [
                {
                    index: true,
                    element: <Survey />
                },
            ]
        },
]