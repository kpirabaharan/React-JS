import React from 'react';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    address: '123 Address Road',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://static.toiimg.com/photo/msid-88070906,width-96,height-65.cms',
    address: '123 India Road',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
};

export default HomePage;
