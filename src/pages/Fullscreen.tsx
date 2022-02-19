import { useFullscreen } from 'bee-hooks';
import type { FC } from 'react';

const Fullscreen: FC = () => {
  const { toggle, isFullscreen } = useFullscreen();
  return (
    <>
      <div>
        <button onClick={toggle}>{isFullscreen ? 'set normal mode' : 'set fullscreen mode'}</button>
      </div>
    </>
  );
};

export default Fullscreen;
