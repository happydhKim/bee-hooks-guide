import { Footer, Header } from 'components';

import type { FC } from 'react';

const AppLayout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
