import { useContext } from 'react'
import UserContext from './Context';

const useUsers = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserContext.Provider is required');
  }

  return context;
};

export default useUsers
