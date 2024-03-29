import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSidebar, CSidebarNav } from '@coreui/react';
import { AppSidebarNav } from './AppSidebarNav';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import navigation from '../routes/_nav';

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar position="fixed" unfoldable={unfoldable} visible={sidebarShow} onVisibleChange={(visible) => { dispatch({ type: 'set', sidebarShow: visible }) }} >
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)