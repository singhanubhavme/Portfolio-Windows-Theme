import { useContext } from 'react';
import { OpenAppContext } from '@/context/openApp';

function useOpenAppContext() {
  return useContext(OpenAppContext);
}

export default useOpenAppContext;
