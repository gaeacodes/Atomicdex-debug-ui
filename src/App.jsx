import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './components/ProTip';
import Landing from './views/landing';
import Main from './layouts/main';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      `.`
    </Typography>
  );
}

export default function App() {
  return (
    <Router>
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v4-beta example
          </Typography>
          <Link to="/one">One</Link>
          <Switch>
            <RouteWrapper path="/one" component={Landing} layout={Main} />
          </Switch>

          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Router>
  );
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
