import React, { Fragment } from 'react';
import Link from 'next/link';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page!</h1>
      <ul>
        <li>
          <Link href={'/news/next-js'}>NextJS</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
