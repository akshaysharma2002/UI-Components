// Breadcrumb.jsx
import React from 'react';
import style from './StyleBreadcrumb.module.css';

const Breadcrumb = ({breadcrumbLinks}) => {
  return (
      <div className={style["breadcrumb"]}>
        {breadcrumbLinks.map((link, index) => (
          <React.Fragment key={index}>
            {index !== 0 && <span className={style["breadcrumb-separator"]}>/</span>}
            <a href={link.url}>{link.label}</a>
          </React.Fragment>
        ))}
      </div>
  );
};

export default Breadcrumb;