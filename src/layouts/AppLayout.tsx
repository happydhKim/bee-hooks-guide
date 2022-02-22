import { memo } from 'react';
import { css } from '@emotion/react';
import { Footer, Header } from 'components';

import type { FC } from 'react';

const AppLayout: FC = ({ children }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <Header />
      <main
        css={css`
          min-height: 800px;
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default memo(AppLayout);
