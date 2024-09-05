import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cil3d,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Admin',
        to: '/dashboard/admin',
      },
      {
        component: CNavItem,
        name: 'Employee',
        to: '/dashboard/employee',
      },
      {
        component: CNavItem,
        name: 'Deals',
        to: '/dashboard/deals',
      },
      {
        component: CNavItem,
        name: 'Leads',
        to: '/dashboard/leads',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'App',
    to: '/app',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Chat',
      //   to: '/app/chat',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Call',
      //   to: '/app/call',
      // },
      {
        component: CNavItem,
        name: 'Calendar',
        to: '/app/calendar',
      },
      // {
      //   component: CNavItem,
      //   name: 'Email',
      //   to: '/app/email',
      // },
    ],
  },
  {
    component: CNavTitle,
    name: 'Employees',
  },
  // todo: Employee
  {
    component: CNavGroup,
    name: 'Employee',
    to: '/employees',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Employee',
        to: '/employees/all-employees',
      },
      {
        component: CNavItem,
        name: 'Holidays',
        to: '/employees/holidays',
      },
      {
        component: CNavItem,
        name: 'Leave Admin',
        to: '/employees/leave-admin',
      },
      {
        component: CNavItem,
        name: 'Leave Employee',
        to: '/employees/employee-leave',
      },
      // {
      //   component: CNavItem,
      //   name: 'Leave Settings',
      //   to: '/employees/leave-Settings',
      // },
      {
        component: CNavItem,
        name: 'Attendence Admin',
        to: '/employees/attendence-Admin',
      },
      {
        component: CNavItem,
        name: 'Attendence Employee',
        to: '/employees/attendence-Employee',
      },
      {
        component: CNavItem,
        name: 'Departments',
        to: '/employees/departments',
      },
      {
        component: CNavItem,
        name: 'Designations',
        to: '/employees/designations',
      },
      {
        component: CNavItem,
        name: 'Time Sheet',
        to: '/employees/time-sheet',
      },
      {
        component: CNavItem,
        name: 'Shift & Schedule',
        to: '/employees/shift-schedules',
      },
      {
        component: CNavItem,
        name: 'Overtime',
        to: '/employees/overtime',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Clients',
  },
  {
    component: CNavItem,
    name: 'Clients',
    to: '/clients',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'HR',
  },
  {
    component: CNavGroup,
    name: 'Reports',
    to: '/report',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Task Report',
        to: '/report/task-report',
      },
      {
        component: CNavItem,
        name: 'User Report',
        to: '/report/user-report',
      },
      {
        component: CNavItem,
        name: 'Employee Report',
        to: '/report/employee-report',
      },
      {
        component: CNavItem,
        name: 'Payslip Report',
        to: '/report/payslip-report',
      },
      {
        component: CNavItem,
        name: 'Attendence Report',
        to: '/report/attendence-report',
      },
      {
        component: CNavItem,
        name: 'Leave Report',
        to: '/report/leave-report',
      },
      {
        component: CNavItem,
        name: 'Daily Report',
        to: '/    ',
      },
      {
        component: CNavItem,
        name: 'Projects Report',
        to: '/report/projects-report',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Role & Permission',
        to: '/settings/role-list',
      },
      {
        component: CNavItem,
        name: 'Notifications',
        to: '/settings/notification',
      },
    ],
  },
]

export default _nav
