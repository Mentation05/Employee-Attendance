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
  { path: '/employees/all-employees', name: 'All Employees', element: <AuthGuard element={<Employee />} allowedRoles={['employee']} />},
  { path: '/employees/leave-admin', name: 'Leave', element: <AuthGuard element={<Leave />} allowedRoles={['employee']} /> },
  { path: '/employees/holidays', name: 'Holidays', element: <AuthGuard element={<Holidays />} allowedRoles={['employee']} /> },
  { path: '/employees/employee-leave', name: 'EmployeeLeave', element: <AuthGuard element={<EmployeeLeave />} allowedRoles={['employee']} /> },
  { path: '/employees/leave-Settings', name: 'LeaveSettings', element: <AuthGuard element={<LeaveSettings />} allowedRoles={['employee']} /> },
  { path: '/employees/attendence-Admin', name: 'AttendenceAdmin', element: <AuthGuard element={<AttendenceAdmin />} allowedRoles={['employee']} /> },
  { path: '/employees/attendence-Employee', name: 'AttendenceEmployee', element: <AuthGuard element={<AttendenceEmployee />} allowedRoles={['employee']} />},
  { path: '/employees/departments', name: 'Departments', element: <AuthGuard element={<Departments />} allowedRoles={['employee']} /> },
  { path: '/employees/designations', name: 'Designations', element: <AuthGuard element={<Designations />} allowedRoles={['employee']} /> },
  { path: '/employees/time-sheet', name: 'Time-Sheet', element: <AuthGuard element={<TimeSheet />} allowedRoles={['employee']} /> },
  { path: '/employees/shift-schedules', name: 'Shift-Schedules', element: <AuthGuard element={<ShiftSchedules />} allowedRoles={['employee']} /> },
  { path: '/employees/overtime', name: 'Overtime', element: <AuthGuard element={<OverTime />} allowedRoles={['employee']} /> },

  //CLIENTS
  { path: '/clients', name: 'Clients', element: <AuthGuard element={<Clients />} allowedRoles={['employee', 'admin']} /> },
  { path: '/clients-profile', name: 'Clients-Profile', element: <AuthGuard element={<ClientsProfile />} allowedRoles={['employee', 'admin']} /> },

  //REPORTS
  { path: '/report', name: 'Reports' },
  { path: '/report/projects-report', name: 'Project Reports', element: <AuthGuard element={<ProjectReport />} allowedRoles={['employee', 'admin']} /> },
  { path: '/report/task-report', name: 'Task Reports', element: <AuthGuard element={<TaskReport />} allowedRoles={['employee', 'admin']} /> },
  { path: '/report/user-report', name: 'User Reports', element: <AuthGuard element={<UserReport />} allowedRoles={['employee', 'admin']} /> },
  { path: '/report/employee-report', name: 'Employee Reports', element: <AuthGuard element={<EmployeeReport />} allowedRoles={['employee', 'admin']} /> },
  { path: '/report/payslip-report', name: 'Payslip Reports', element: <AuthGuard element={<PayslipReport />} allowedRoles={['employee', 'admin']} /> },
  { path: '/report/attendence-report', name: 'Attendence Reports', element: <AuthGuard element={<AttendenceReport />} allowedRoles={['employee', 'admin']} /> },
  { path: '/report/leave-report', name: 'Leave Reports', element: <AuthGuard element={<LeaveReport />} allowedRoles={['employee', 'admin']} /> },
  { path: '/report/daily-report', name: 'Daily Reports', element: <AuthGuard element={<DailyReport />} allowedRoles={['employee', 'admin']} /> },

  //SETTINGS
  { path: '/settings', name: 'Settings' },
  { path: '/settings/role-list', name: 'Role & Permission', element: <AuthGuard element={<Role />} allowedRoles={['employee', 'admin']} /> },
  { path: '/settings/notification', name: 'Notifications', element: <AuthGuard element={<Notification />} allowedRoles={['employee', 'admin']} /> },

  //HR
  { path: '/leave-policy', name: 'LeavePolicy', element: <AuthGuard element={<LeavePolicy />} allowedRoles={['employee', 'admin']} /> },
  { path: '/branches', name: 'Branches', element: <AuthGuard element={<Branches />} allowedRoles={['employee', 'admin']} /> },
  

]

export default routes
