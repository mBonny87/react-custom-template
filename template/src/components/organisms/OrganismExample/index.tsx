import React from 'react';
import { MoleculeExample } from '../../molecules';

export const OrganismExample = () : JSX.Element | null => {
  return (
    <div>
      <MoleculeExample />
      <MoleculeExample />
      <MoleculeExample />
    </div>
  );
}