import { element } from 'prop-types'
import React from 'react'
import AuthGuard from './components/AuthGuard';

// ----------------------------------------------------------------//

// DASHBOARD
import AdminDashboard from './views/Dashboard/AdminDashboard/AdminDashboard'
import EmployeeDashboard from './views/Dashboard/EmployeeDashboard/EmployeeDashboard'

//APPS
import Calendar from './views/Application/Calendar/Calendar';

//EMPLOYEES
import Employee from './views/Employees/Employee/Emloyee'
import Leave from './views/Employees/Leave/Leave'
import Holidays from './views/Employees/Holidays/Holidays'
import EmployeeLeave from './views/Employees/EmployeeLeave/EmployeeLeave'
import LeaveSettings from './views/Employees/LeaveSettings/LeaveSettings'
import AttendenceAdmin from './views/Employees/AttendenceAdmin/AttendenceAdmin'
import AttendenceEmployee from './views/Employees/AttendenceEmployee/AttendenceEmployee'
import Departments from './views/Employees/Departments/Departments'
import Designations from './views/Employees/Designations/Designations'
import TimeSheet from './views/Employees/TimeSheet/TimeSheet'
import ShiftSchedules from './views/Employees/ShiftSchedules/ShiftSchedules'
import OverTime from './views/Employees/OverTime/OverTime'

//CLIENTS
import Clients from './views/Clients-page/Clients'
import ClientsProfile from './views/Clients-page/Client-Profile'

//REPORTS
import ProjectReport from './views/HR/Report/ProjectReport/ProjectReport'
import TaskReport from './views/HR/Report/Task/Task'
import UserReport from './views/HR/Report/User/User'
import EmployeeReport from './views/HR/Report/Employee/Employe'
import PayslipReport from './views/HR/Report/Payslip/Payslip'
import AttendenceReport from "./views/HR/Report/Attendence/Attendence";
import LeaveReport from "./views/HR/Report/Leave/Leave";
import DailyReport from "./views/HR/Report/Daily/Daily";

//SETTINGS
import Role from './views/Settingss/SettingsPage/SettingsPage'
import Notification from './views/Settingss/Notificationpage/Notificationpage'

//HR
import LeavePolicy from './views/HR/LeavePolicy/Leave-Policy'
import Branches from './views/HR/Branches/Branches'


const routes = [

  //DASHBOARDS
  { path: '/dashboard', name: 'Dashboard' },
  { path: '/dashboard/admin', name: 'Admin Dashboard', element: <AuthGuard element={<AdminDashboard />} allowedRoles={['admin']} />},
  { path: '/dashboard/employee', name: 'Employee Dashboard', element: <AuthGuard element={<EmployeeDashboard />} allowedRoles={['employee']} /> }, 

  //APPS
  { path: '/app', name: 'App' },
  { path: '/app/calendar', name: 'Calendar', element: <AuthGuard element={<Calendar />} allowedRoles={['employee', 'admin']} /> },

  //EMPLOYEES
  { path: '/employees', name: 'Employees' },
  { path: '/employees/all-employees', name: 'All Employees', element: <AuthGuard element={<Employee />} allowedRoles={['employee']} />  },
  { path: '/employees/leave-admin', name: 'Leave', element: Leave },
  { path: '/employees/holidays', name: 'Holidays', element: Holidays },
  { path: '/employees/employee-leave', name: 'EmployeeLeave', element: EmployeeLeave },
  { path: '/employees/leave-Settings', name: 'LeaveSettings', element: LeaveSettings },
  { path: '/employees/attendence-Admin', name: 'AttendenceAdmin', element: AttendenceAdmin },
  { path: '/employees/attendence-Employee', name: 'AttendenceEmployee', element: AttendenceEmployee,},
  { path: '/employees/departments', name: 'Departments', element: Departments },
  { path: '/employees/designations', name: 'Designations', element: Designations },
  { path: '/employees/time-sheet', name: 'Time-Sheet', element: TimeSheet },
  { path: '/employees/shift-schedules', name: 'Shift-Schedules', element: ShiftSchedules },
  { path: '/employees/overtime', name: 'Overtime', element: OverTime },

  //CLIENTS
  { path: '/clients', name: 'Clients', element: Clients },
  { path: '/clients-profile', name: 'Clients-Profile', element: ClientsProfile },

  //REPORTS
  { path: '/report', name: 'Reports' },
  { path: '/report/projects-report', name: 'Project Reports', element: ProjectReport },
  { path: '/report/task-report', name: 'Task Reports', element: TaskReport },
  { path: '/report/user-report', name: 'User Reports', element: UserReport },
  { path: '/report/employee-report', name: 'Employee Reports', element: EmployeeReport },
  { path: '/report/payslip-report', name: 'Payslip Reports', element: PayslipReport },
  { path: '/report/attendence-report', name: 'Attendence Reports', element: AttendenceReport },
  { path: '/report/leave-report', name: 'Leave Reports', element: LeaveReport },
  { path: '/report/daily-report', name: 'Daily Reports', element: DailyReport },

  //SETTINGS
  { path: '/settings', name: 'Settings' },
  { path: '/settings/role-list', name: 'Role & Permission', element: Role },
  { path: '/settings/notification', name: 'Notifications', element: Notification },

  //HR
  { path: '/leave-policy', name: 'LeavePolicy', element: LeavePolicy },
  { path: '/branches', name: 'Branches', element: Branches },
  

]

export default routes
