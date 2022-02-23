import { memo } from 'react';
import { ContentLayout } from 'layouts';
import { FullscreenContainer, RefFullscreenContainer } from './components';
import type { FC } from 'react';

const Fullscreen: FC = () => {
  return (
    <ContentLayout
      content={[<FullscreenContainer key="fullscreen" />, <RefFullscreenContainer key="ref-fullscreen" />]}
    />
  );
};

export default memo(Fullscreen);
