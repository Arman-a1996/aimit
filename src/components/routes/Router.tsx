import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import WarningModal from 'ui/warning-modal/WarningModal';

import NotFound from '../not-found/NotFound';
import PageOne from '../pageOne/PageOne';
import PageTwo from '../pageTwo/PageTwo';

import { ROUTES } from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <WarningModal />
      <Routes>
        <Route path={ROUTES.HOME} element={<PageOne />} />;
        <Route path={ROUTES.ABOUT} element={<PageTwo />} />;
        <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/*<Navigate to={ROUTES.HOME} replace={true} />*/}
    </BrowserRouter>
  );
};

export default Router;
