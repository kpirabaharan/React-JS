import classes from './PageContent.module.css';

function PageContent({ title, children }) {
  return (
    <div className={classes}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
