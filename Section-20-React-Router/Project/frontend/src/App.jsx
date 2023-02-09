import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './routes/Root';
import HomePage from './routes/Home';
import ErrorPage from './routes/Error';
import EventsRootLayout from './routes/EventsRoot';
import EventsPage, { loader as eventsLoader } from './routes/Events';
import EventDetailPage, {
  loader as eventLoader,
  action as deleteEvent,
} from './routes/EventDetail';
import EditEventPage from './routes/EditEvent';
import NewEventPage from './routes/NewEvent';
import { action as eventAction } from './components/EventForm';

function App() {
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
              id: 'event-detail',
              path: ':eventId',
              loader: eventLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEvent,
                },
                { path: 'edit', element: <EditEventPage />, action: eventAction },
              ],
            },
            { path: 'new', element: <NewEventPage />, action: eventAction },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
