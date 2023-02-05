import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

function EventsRootLayout() {
  return (
    <Fragment>
      <EventsNavigation />
      <Outlet />
    </Fragment>
  );
}

export default EventsRootLayout;
