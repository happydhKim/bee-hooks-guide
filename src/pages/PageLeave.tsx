import { useState } from 'react';
import { usePageLeave } from 'bee-hooks';
import { css } from '@emotion/react';

import type { FC } from 'react';

const PageLeave: FC = () => {
  const [leaveCount, setLeaveCount] = useState<number>(0);
  usePageLeave(() => {
    setLeaveCount((count) => count + 1);
  });
  return (
    <div
      css={css`
        margin-top: 100px;
        text-align: center;
        height: 200px;
        width: 500px;
        border: 1px solid #ccc;
        padding: 50px;
      `}
    >
      <div
        css={css`
          display: inline-block;
          width: 100px;
          height: 40px;
          padding-top: 10px;
          font-size: 30px;
          border: 1px solid blue;
        `}
      >
        {leaveCount}
      </div>
    </div>
  );
};

export default PageLeave;
