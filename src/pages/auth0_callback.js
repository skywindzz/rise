import React from 'react';
import { ClipLoader } from 'react-spinners';

import Auth from '../utils/auth';
import useComponentDidMount from '../components/useComponentDidMount';
import { navigate } from '@reach/router';

const Auth0CallbackPage = () => {
  useComponentDidMount(() => {
    const auth = new Auth();
    const { isAuthenticated } = auth;
    auth.handleAuthentication();
    if (isAuthenticated()) {
      navigate('/profile');
      console.log('this run');
    }

    console.log('hitting auth0 callback');
    console.log(auth);
  });

  return (
    <div>
      <h1>
        This is the auth callback page, you should be redirected immediately.
      </h1>
      <ClipLoader sizeUnit='px' size={150} />
    </div>
  );
};

export default Auth0CallbackPage;
