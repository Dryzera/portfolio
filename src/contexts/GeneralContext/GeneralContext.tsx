import { createContext } from 'react';
import { initialGeneralState } from './initialGeneralState';
import type { GeneralStateModel } from '../../models/GeneralStateModel';

type GeneralContextProps = {
  state: GeneralStateModel;
  setState: React.Dispatch<React.SetStateAction<GeneralStateModel>>;
};

const initialContextValue = {
  state: initialGeneralState,
  setState: () => {},
};

export const GeneralContext =
  createContext<GeneralContextProps>(initialContextValue);
