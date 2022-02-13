import { css } from '@emotion/react';

import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer
      css={css`
        width: 100%;
        text-align: center;
        border-top: 1px solid #ccc;
      `}
    >
      Bee Hooks 2022
    </footer>
  );
};

export default Footer;
