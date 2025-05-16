import { useState } from 'react';
import { initialGeneralState } from './initialGeneralState';
import { GeneralContext } from './GeneralContext';

type GeneralContextProviderProps = {
  children: React.ReactNode;
};

export function GeneralContextProvider({
  children,
}: GeneralContextProviderProps) {
  const [state, setState] = useState(initialGeneralState);

  return (
    <GeneralContext.Provider value={{ state, setState }}>
      {children}
    </GeneralContext.Provider>
  );
}
