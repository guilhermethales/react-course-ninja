'use strict';

import { storiesOf, action } from '@kadira/storybook';
import React from 'react';
import Actions from './index';

storiesOf('Actions', module)
  .add('first story', () => (
    <Actions 
      getRepos={action('Get Repos')} 
      getStarred={action('Get Starred')} />
  ))