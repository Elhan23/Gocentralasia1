import React from 'react';
import { useRoutes } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'; 
import Destination from '../pages/Destination/Destination';
import Tours from '../pages/Tours/Tours';
import Blog from '../pages/Blog/Blog';
import Aboutus from '../pages/Aboutus/Aboutus';
import Contactus from '../pages/Contactus/Contactus';

const AppRouter = () => {
  const element = useRoutes([
    { path: "/destination", element: <Destination /> },
    { path: "/tours", element: <Tours /> },
    { path: "/blog", element: <Blog /> },
    { path: "/about", element: <Aboutus /> },
    { path: "/contact", element: <Contactus /> },
  ]);

  return (
    <div>
      <Breadcrumbs /> 
      {element}
    </div>
  );
};

export default AppRouter;
