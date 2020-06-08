import React, { useState } from 'react';
import ToolbarComponent from '../Toolbar/index.jsx';
import DrawerComponent from '../Drawer/index.jsx';

export default () => {
  const [right, setRight] = useState(false);
  const openDrawer = () => {
    setRight(true);
  };

  const toggleDrawer = () => {
    setRight(false);
  };
  return (
    <>
      <ToolbarComponent openDrawerHandler={openDrawer} />
      <DrawerComponent
        right={right}
        toggleDrawerHandler={toggleDrawer}
        opneDrawer={openDrawer}
      />
    </>
  );
};
