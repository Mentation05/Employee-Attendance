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
    name: 'CRM',
  },
  {
    component: CNavItem,
    name: 'Contacts',
    to: '/contacts',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Companies',
    to: '/companies',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Deals',
    to: '/deals',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Leads',
    to: '/leads',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Activity',
    to: '/activity',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'HR',
  },

  {
    component: CNavGroup,
    name: 'Sales',
    to: '/sales',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Estimates',
        to: '/sales/estimates',
      },
      {
        component: CNavItem,
        name: 'Invoices ',
        to: '/sales/invoices',
      },
      {
        component: CNavItem,
        name: 'Payments ',
        to: '/sales/payments',
      },
      {
        component: CNavItem,
        name: 'Expences ',
        to: '/sales/expences',
      },
      {
        component: CNavItem,
        name: 'Provident Fund ',
        to: '/sales/provident-fund',
      },
      {
        component: CNavItem,
        name: 'Taxes ',
        to: '/sales/taxes',
      },
    ],
  },
  // todo: Accounting
  {
    component: CNavGroup,
    name: 'Accounting',
    to: '/accounting',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Categories',
        to: '/accounting/categories',
      },
      {
        component: CNavItem,
        name: 'Budgets',
        to: '/accounting/budgets',
      },
      {
        component: CNavItem,
        name: 'Budgets Expenses',
        to: '/accounting/budgets-expenses',
      },
      {
        component: CNavItem,
        name: 'Budgets Revenues',
        to: '/accounting/budgets-revenues',
      },
    ],
  },
  // todo: payroll
  {
    component: CNavGroup,
    name: 'Payroll',
    to: '/payroll',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employee Salary',
        to: '/payroll/employee-salary',
      },
      {
        component: CNavItem,
        name: 'Payslip',
        to: '/payroll/payslip',
      },
      {
        component: CNavItem,
        name: 'Payroll Items ',
        to: '/payroll/payroll-items',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Polices',
    to: '/polices',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Company Polices',
        to: '/polices/company-polices',
      },
      {
        component: CNavItem,
        name: 'Employee Polices',
        to: '/polices/employee-polices',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reports',
    to: '/report',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Expense Report',
        to: '/report/expense-report',
      },
      {
        component: CNavItem,
        name: 'Invoices Report',
        to: '/report/invoices-report',
      },
      {
        component: CNavItem,
        name: 'Payments Report',
        to: '/report/payments-report',
      },
      {
        component: CNavItem,
        name: 'Projects Report',
        to: '/report/projects-report',
      },
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
    ],
  },
  {
    component: CNavTitle,
    name: 'Performance',
  },
  {
    component: CNavGroup,
    name: 'Performance',
    to: '/performance',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Performance Indicator',
        to: '/performance/performance-indicator',
      },
      {
        component: CNavItem,
        name: 'Performance Review',
        to: '/performance/performance-review',
      },
      {
        component: CNavItem,
        name: 'Performance Appraisal',
        to: '/performance/performance-appraisal',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Goals',
    to: '/goals',
    icon: <CIcon icon={cil3d} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Goal List',
        to: '/goals/goal-list',
      },
      {
        component: CNavItem,
        name: 'Goal Type',
        to: '/goals/goal-type',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Training',
    to: '/trainings',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Training List',
        to: '/trainings/training-list',
      },
      {
        component: CNavItem,
        name: 'Trainers',
        to: '/trainings/trainers',
      },
      {
        component: CNavItem,
        name: 'Training Type',
        to: '/trainings/training-type',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Promotions',
    to: '/promotions',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Resigination',
    to: '/resigination',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Terminatation',
    to: '/terminatation',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Administration',
  },
  {
    component: CNavItem,
    name: 'Assets',
    to: '/company-assets',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/company-users',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
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
