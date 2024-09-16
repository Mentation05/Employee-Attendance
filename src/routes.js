import { element } from 'prop-types'
import React from 'react'
// ----------------------------------------------------------------//
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
import Clients from './views/Clients-page/Clients'
import Contacts from './views/CRM/Contact/Contact'
import Companies from './views/CRM/Companies/Companies'
import Deals from './views/CRM/Deals/Deal'
import Activity from './views/CRM/Activity/Activity'
import Lead from './views/CRM/Lead/Lead'

import ProjectReport from './views/HR/Report/ProjectReport/ProjectReport'
import TaskReport from './views/HR/Report/Task/Task'
import UserReport from './views/HR/Report/User/User'
import EmployeeReport from './views/HR/Report/Employee/Employe'
import PayslipReport from './views/HR/Report/Payslip/Payslip'
import PerformanceIndicator from './views/Performance/Performance/PerformanceIndicator/PerformanceIndicator'
import PerformanceReviews from './views/Performance/Performance/PerformanceReviews/PerformanceReviews'
import PerformanceAppraisal from './views/Performance/Performance/PerformanceAppraisal/PerformanceAppraisal'

import GoalList from './views/Performance/Goal/GoalList/GoalList'
import GoalType from './views/Performance/Goal/GoalType/GoalType'
import TrainingList from './views/Performance/Traning/TranningList/TranningList'
import Trainers from './views/Performance/Traning/Trainers/Trainers'
import TrainingType from './views/Performance/Traning/TraningType/TraningType'
import Promotions from './views/Performance/Promotions/Promotions'
import Resigination from './views/Performance/Resigination/Resigination'
import Terminatation from './views/Performance/Terminatation/Terminatation'
import CompanyAssets from './views/CompanyAssets/CompanyAssets'
import CompanyUsers from './views/CompanyUsers/CompanyUsers'
import ChatApp from './views/Application/Chat/Chat'
import CallApp from './views/Application/Call/Call'
import EmailApp from './views/Application/Email/Email'
import calendar from './views/Application/Calendar/Calendar';
import AdminDashboard from './views/Dashboard/AdminDashboard/AdminDashboard'
import EmployeeDashboard from './views/Dashboard/EmployeeDashboard/EmployeeDashboard'
import AdminLeads from './views/CRM/Lead/Lead'
import AdminDeals from './views/CRM/Deals/Deal'
import ClientsProfile from './views/Clients-page/Client-Profile'
import Role from './views/Settingss/SettingsPage/SettingsPage'
import Notification from './views/Settingss/Notificationpage/Notificationpage'
import AttendenceReport from "./views/HR/Report/Attendence/Attendence";
import LeaveReport from "./views/HR/Report/Leave/Leave";
import DailyReport from "./views/HR/Report/Daily/Daily";

import LeavePolicy from './views/HR/LeavePolicy/Leave-Policy'



const routes = [
  // { path: '/login', name: 'Login',  element: Login },

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
  { path: '/clients', name: 'Clients', element: Clients },
  { path: '/clients-profile', name: 'Clients-Profile', element: <AuthGuard element={<ClientsProfile />} allowedRoles={['employee', 'admin']} /> },

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
  { path: '/performance', name: 'Performance' },
  { path: '/performance/performance-indicator', name: 'Performance Indicators', element: PerformanceIndicator},
  {
    path: '/performance/performance-review',
    name: 'Performance Review',
    element: PerformanceReviews,
  },
  {
    path: '/performance/performance-appraisal',
    name: 'Performance Appraisal',
    element: PerformanceAppraisal,
  },
  { path: '/goals', name: 'Goals' },
  { path: '/goals/goal-list', name: 'Goals List', element: GoalList },
  { path: '/goals/goal-type', name: 'Goals Type', element: GoalType },
  { path: '/trainings', name: 'Training' },
  { path: '/trainings/training-list', name: 'Training List', element: TrainingList },
  { path: '/trainings/trainers', name: 'Trainers', element: Trainers },
  { path: '/trainings/training-type', name: 'Training Type', element: TrainingType },
  { path: '/resigination', name: 'Resigination', element: Resigination },
  { path: '/promotions', name: 'Promotions', element: Promotions },
  { path: '/terminatation', name: 'Termination', element: Terminatation },
  { path: '/company-assets', name: 'Company Assets', element: CompanyAssets },
  { path: '/company-users', name: 'Company Users', element: CompanyUsers },

  { path: '/clients-profile', name: 'Clients-Profile', element: ClientsProfile },
  { path: '/settings', name: 'Settings' },
  { path: '/settings/role-list', name: 'Role & Permission', element: <AuthGuard element={<Role />} allowedRoles={['employee', 'admin']} /> },
  { path: '/settings/notification', name: 'Notifications', element: <AuthGuard element={<Notification />} allowedRoles={['employee', 'admin']} /> },

  //HR
  { path: '/leave-policy', name: 'LeavePolicy', element: <AuthGuard element={<LeavePolicy />} allowedRoles={['employee', 'admin']} /> },
  { path: '/branches', name: 'Branches', element: <AuthGuard element={<Branches />} allowedRoles={['employee', 'admin']} /> },


];

export default routes;
