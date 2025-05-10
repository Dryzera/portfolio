import { useContext } from 'react';
import { GeneralContext } from './GeneralContext';

export function useGeneralContext() {
  return useContext(GeneralContext);
}
