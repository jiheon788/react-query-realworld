import { Outlet } from 'react-router-dom';
import Header from '@/components/header/Header';
import Footer from '@/components/common/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
