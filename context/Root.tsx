import React, {createContext, FC} from 'react';
import AuthProvider from './Auth';

const RootContext = createContext(null);
const RootProvider: FC = props => {
  return (
    <RootContext.Provider value={null}>
      <AuthProvider>{props.children}</AuthProvider>
    </RootContext.Provider>
  );
};

export default RootProvider;
