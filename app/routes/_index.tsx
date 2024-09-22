import { memo } from 'react';
import type { FC } from 'react';

import classes from '../components/App.module.css'; 
import resets from '../components/_resets.module.css';
import { FigmaDesignMacBookPro14_141Png } from '../components/FigmaDesignMacBookPro14_141Png/FigmaDesignMacBookPro14_141Png';

interface Props {
  className?: string;
}

const Index: FC<Props> = memo(function Index(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <FigmaDesignMacBookPro14_141Png />
    </div>
  );
});

export default Index;
