import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { AppLayout } from 'layouts';

import type { FC } from 'react';

const MainPage = lazy(() => import('pages/Main'));
const Fullscreen = lazy(() => import('pages/Fullscreen'));
const PageLeave = lazy(() => import('pages/PageLeave'));
const NotFound = lazy(() => import('pages/NotFound'));

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <AppLayout>
          <ReactRoutes>
            <Route path="/" element={<MainPage />} />
            <Route path="/fullscreen" element={<Fullscreen />} />
            <Route path="/pageleave" element={<PageLeave />} />
            <Route path="*" element={<NotFound />} />
          </ReactRoutes>
        </AppLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
