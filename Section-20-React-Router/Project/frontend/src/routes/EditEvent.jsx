import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

function EditEventPage() {
  const data = useRouteLoaderData('event-detail');

  console.log(data);

  return <EventForm event={data.event} method={'PATCH'} />;
}

export default EditEventPage;
