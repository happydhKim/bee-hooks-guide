import { css } from '@emotion/react';

import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer
      css={css`
        margin: 0 auto;
      `}
    >
      Bee Hooks 2022
    </footer>
  );
};

export default Footer;
