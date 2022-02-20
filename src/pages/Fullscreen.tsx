import { useFullscreen } from 'bee-hooks';
import { css } from '@emotion/react';
import { Button } from 'components';

import type { FC } from 'react';

const Fullscreen: FC = () => {
  const { toggle, isFullscreen } = useFullscreen();
  return (
    <>
      <div
        css={css`
          padding: 50px;
        `}
      >
        <Button onClick={toggle}>{isFullscreen ? 'set normal mode' : 'set fullscreen mode'}</Button>
      </div>
    </>
  );
};

export default Fullscreen;
