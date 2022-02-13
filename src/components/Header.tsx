import { css } from '@emotion/react';

import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header
      css={css`
        height: 56px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
      `}
    >
      <strong
        css={css`
          cursor: pointer;
          margin-left: 30px;
          padding: 18px 0;
          font-size: 20px;
        `}
      >
        Bee Hooks Guide 🐝
      </strong>
      <nav
        css={css`
          margin-right: 30px;
        `}
      >
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
