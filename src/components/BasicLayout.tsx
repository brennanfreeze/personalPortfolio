import React, { useEffect, useState } from 'react';
import TopMenu from './TopMenu';
import StarBackground from './StarBackground';
import LoadingState from './Loading';

const BasicLayout: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setIsLoading(true);
  }, []);
  return (
    <>
      {isLoading ? <LoadingState /> : null}
      <StarBackground />
      <TopMenu />
    </>
  );
};

export default BasicLayout;
