import React from 'react';
import Mermaid from '@theme-original/Mermaid';
import type MermaidType from '@theme/Mermaid';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof MermaidType>;

export default function MermaidWrapper(props: Props): JSX.Element {
  return (
    <>
      <Mermaid {...props} />
    </>
  );
}
