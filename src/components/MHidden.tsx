import { Theme, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default function MHidden({ width, children }: {width: string; children: ReactNode}) {
  const breakpoint: Breakpoint = ['xs', 'sm', 'md', 'lg', 'xl'].find(bp => width.startsWith(bp)) as Breakpoint;

  const hiddenUp = useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint));
  const hiddenDown = useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoint));

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }

  return null;
}
