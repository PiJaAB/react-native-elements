// @flow
import React from 'react';

import Container from '../Container/Container';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

const Loader = () => (
  <Container verticallyAligned scroll={false}>
    <LoadingIndicator loading centered />
  </Container>
);

export default Loader;
