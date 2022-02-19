import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import type { FC } from 'react';

const MainPage = lazy(() => import('pages/Main'));
const FullscreenPage = lazy(() => import('pages/Fullscreen'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <ReactRoutes>
          <Route path="/" element={<MainPage />} />
          <Route path="/fullscreen" element={<FullscreenPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </ReactRoutes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
