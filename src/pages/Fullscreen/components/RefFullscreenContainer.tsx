import { memo } from 'react';
import { useFullscreen } from 'bee-hooks';
import { css } from '@emotion/react';
import { Button } from 'components';

import type { FC } from 'react';

const RefFullscreenContainer: FC = () => {
  const { fullscreenRef, toggle, isFullscreen } = useFullscreen();
  return (
    <>
      <div
        css={css`
          padding: 50px;
        `}
      >
        <div
          ref={fullscreenRef}
          css={css`
            font-size: 80px;
            text-align: center;
          `}
        >
          🐝
        </div>
        <span>If you don't use fullscreenRef, the entire screen will be fullscreen.</span>
        <Button onClick={toggle}>{isFullscreen ? 'set normal mode' : 'set ref fullscreen mode'}</Button>
      </div>
    </>
  );
};

export default memo(RefFullscreenContainer);
