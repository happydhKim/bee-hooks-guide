import { memo } from 'react';
import { useFullscreen } from 'bee-hooks';
import { css } from '@emotion/react';
import { Button } from 'components';

import type { FC } from 'react';

const FullscreenContainer: FC = () => {
  const { toggle, isFullscreen } = useFullscreen();
  return (
    <>
      <div
        css={css`
          padding: 50px;
        `}
      >
        <div
          css={css`
            font-size: 80px;
            text-align: center;
          `}
        >
          🐝
        </div>
        <span>Normal Fullscreen mode.</span>
        <Button onClick={toggle}>{isFullscreen ? 'set normal mode' : 'set fullscreen mode'}</Button>
      </div>
    </>
  );
};

export default memo(FullscreenContainer);
