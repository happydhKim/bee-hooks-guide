import { css } from '@emotion/react';

import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 8px;
      `}
    >
      <span>Bee Hooks Guide🐝</span>
      <nav>
        <ul
          css={css`
            list-style-type: none;
            display: flex;
          `}
        >
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
