import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ILayoutProps } from './types';

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
