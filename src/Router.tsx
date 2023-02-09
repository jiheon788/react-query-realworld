import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routerMeta from '@/lib/routerMeta';

const lazyImport = (pageName: string) => lazy(() => import(`@/pages/${pageName}`));

const assignRouter = Object.keys(routerMeta).map((componentKey: string) => {
  const props: any = routerMeta[componentKey];

  return {
    Component: lazyImport(componentKey),
    props,
  };
});

const Router = () => (
  <Routes>
    {assignRouter.map(({ Component, props }) => (
      <Route
        key={props.path}
        path={props.path}
        element={
          <Suspense
            fallback={
              <div style={{ textAlign: 'center' }}>
                <h1 className="logo-font">Loading...</h1>
              </div>
            }
          >
            <Component />
          </Suspense>
        }
        {...props}
      />
    ))}
    <Route
      path="/*"
      element={
        <div style={{ textAlign: 'center' }}>
          <h1 className="logo-font">Not Found Page</h1>
        </div>
      }
    />
  </Routes>
);

export default Router;
