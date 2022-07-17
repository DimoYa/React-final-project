import { Link } from 'react-router-dom';

import { Loading } from '../../shared/Loading'


import './NotFound.css';

export const NotFound = () => {
  return (
    <div class="msg container">
      <div fxFlex>404 We cannot find your page</div>
      <div fxFlex>
        <Loading />
      </div>
      <p>
        Let's go <Link to="/">Home</Link> and try from there.
      </p>
    </div>
  );
};
