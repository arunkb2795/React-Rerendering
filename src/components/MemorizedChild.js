import React, { memo } from 'react';

const MemorizedChild = () => {
  console.log('MemorizedChild Rendering...');
  return <div>MemorizedChild Component</div>;
};

export default memo(MemorizedChild);
