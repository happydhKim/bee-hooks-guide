import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header
      css={css`
        height: 50px;
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
          padding: 16px 0;
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
          <Link>one</Link>
          <Link>two</Link>
          <Link>three</Link>
        </ul>
      </nav>
    </header>
  );
};

const Link = styled('li')`
  width: 50px;
  cursor: pointer;
`;

export default Header;
