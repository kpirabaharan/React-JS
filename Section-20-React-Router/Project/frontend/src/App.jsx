import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './routes/EditEvent';
import ErrorPage from './routes/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './routes/EventDetail';
import EventsPage, { loader as eventsLoader } from './routes/Events';
import EventsRootLayout from './routes/EventsRoot';
import HomePage from './routes/Home';
import NewEventPage from './routes/NewEvent';
import RootLayout from './routes/Root';
import NewsletterPage, {
  action as newsletterAction,
} from './routes/Newsletter';
import { action as manipulateEventAction } from './components/EventForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
