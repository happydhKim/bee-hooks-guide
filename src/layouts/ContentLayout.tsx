import { memo } from 'react';
import { css } from '@emotion/react';

import type { FC, ReactNode } from 'react';

type ContentLayoutProps = {
  content: ReactNode[];
};

const ContentLayout: FC<ContentLayoutProps> = ({ content }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      {content.length !== 0 && (
        <div
          css={css`
            min-height: 800px;
          `}
        >
          {content.map((node, index) => (
            <section key={index}>{node}</section>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(ContentLayout);
