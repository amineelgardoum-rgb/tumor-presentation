import { Outlet } from 'react-router-dom';
import { CustomCursor } from './CustomCursor';
import MatrixBackground from './MatrixBackground';
import { useIsTouchDevice } from './MobileTouch'; 
import { PageTransition } from './Transition';


export const Layout = () => {
  const isTouchDevice = useIsTouchDevice();

  return (
    <>
      {!isTouchDevice && <CustomCursor />}
      <PageTransition />
      <LoadingScreen />
      <MatrixBackground />
      <main>
        <Outlet />
      </main>
    </>
  );
};