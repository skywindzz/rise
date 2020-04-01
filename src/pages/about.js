import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

const aboutPage = () => (
  <div>
    <SEO title='Page two' />
    <h1>About Origin</h1>
    <p>
      The Origin website has multiple tools to help you plan and achieve your
      goals in life step by step. Start macro with planning phase to align your
      goals with your values, then fill the habit page with actions that will
      help your reach those goals. Finally, Use the daily page to plan out the
      tasks in your daily life so that you can track what you've accomplished
      everyday toward your goal. I hope using origin will bring postive change
      to your life
    </p>
    <Link to='/'>Back to home</Link>
  </div>
);

export default aboutPage;
