import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilSpeedometer, cilNotes } from '@coreui/icons';
import { CNavItem, CNavGroup } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component: CNavGroup,
    name: 'Cadastros',
    to: '/',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Cidade',
        to: '/cidade',
      },
      {
        component: CNavItem,
        name: 'Estado',
        to: '/estado',
      }
    ]
  }
]

export default _nav