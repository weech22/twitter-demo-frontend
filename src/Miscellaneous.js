import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const Wrap = styled.div`
  font-size: 40px;
  display: flex;
  height: calc(100vh - 50px);
  align-items: center;
  justify-content: center;
`;

const Miscellaneous = ({ match }) => (
  <Wrap>
    {match.url}
  </Wrap>
);

export default withRouter(Miscellaneous);
