import React from 'react';
import { AtomExample } from '../../atoms';

export const MoleculeExample = () : JSX.Element | null => {
  return (
    <div>
      <AtomExample />
      <AtomExample />
      <AtomExample />
    </div>
  );
}
