import React from 'react';
import { createContainer } from 'unstated-next';

function useSfx() {
  return React.useState(true);
}

export default createContainer(useSfx);
