import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// Utils
import PageLoader from './modules/common/PageLoader';

// Routes
const TemplateList = lazy(() => import('./components/TemplateList'));
const EditTemplate = lazy(() => import('./components/EmailEditor'));
const NoMatchPage = lazy(() => import('./modules/not-found/NoMatchPage'));

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" component={TemplateList} />
        <Route exact path="/new" component={EditTemplate} />
        <Route exact path="/edit/:id" component={EditTemplate} />
        <Route component={NoMatchPage} />
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;
