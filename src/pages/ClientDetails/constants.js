/* eslint-disable react/display-name */
import React from 'react';

const STRATEGY_MESSAGES = {
  attention: {
    message: (company) => (
      <>
        Would {company} benifit from <b>Extra Attention?</b>
      </>
    ),
    title:  'Attention'
  },
  bug: {
    message: (company) => (
      <>
        Has {company} encoutnered a <b>bug</b> or issue that needs to resolved?
      </>
    ),
    title: 'Bug',
  },
  contact: {
    message: (company) => (
      <>
        Hit a wall with your current contact at {company} and need to find a{' '}
        <b>New Contact</b> to talk to?
      </>
    ),
    title: 'New Contact',
  },
  escalation: {
    message: (company) => (
      <>
        <b>Escalate</b> or resolve an issue by bringing in your superiors or
        additional resources
      </>
    ),
    title: 'Escalation',
  },
  feature: {
    message: (company) => (
      <>
        Does {company} have a resonable <b>New Feature</b> request?
      </>
    ),
    title: 'New Feature',
  },
  custom: {
    message: (company) => (
      <>
        Implement a <b>Custom</b> strategy to improve your relationship with{' '}
        {company}{' '}
      </>
    ),
    title: 'Custom',
  }
};

export { STRATEGY_MESSAGES };