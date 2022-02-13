import { css } from '@emotion/react';
import { Footer, Header } from 'components';

import type { FC } from 'react';

const AppLayout: FC = ({ children }) => {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
