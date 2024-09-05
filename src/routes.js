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
import EstimatesSales from './views/HR/Sales/EstimatesSales/EstimatesSales'
import Invoices from './views/HR/Sales/Invoices/Invoices'
import Payments from './views/HR/Sales/Payements/Payements'
import Expenses from './views/HR/Sales/Expenses/Expenses'
import PprovidentFund from './views/HR/Sales/Provident-Fund/Provident-Fund'
import Taxes from './views/HR/Sales/Taxes/Taxes'
import Categories from './views/HR/Accounting/Categories/Categories'
import Budgets from './views/HR/Accounting/Budgest/Budgets'
import BudgetsExpenses from './views/HR/Accounting/BudgetsExpenses/BudgetsExpenses'
import BudgetsRevenues from './views/HR/Accounting/BudgetsRevenues/BudgetsRevenues'

import EmployeePolices from './views/HR/polices/EmployeePolices/EmployeePolices'
import EmployeeSalary from './views/HR/Payroll/EmployeeSalary/EmployeeSalary'
import Payslip from './views/HR/Payroll/Payslip/Payslip'
import PayrollItems from './views/HR/Payroll/PayrollItems/PayrollItems'
import ConpanyPolices from './views/HR/polices/ConpanyPolices/ConpanyPolices'

import ExpenseReports from './views/HR/Report/ExpenseReports/ExpenseReports'
import InvoiceReport from './views/HR/Report/InvoiceReport/InvoiceReport'
import PaymentReport from './views/HR/Report/PaymentReport/PaymentReport'
import ProjectReport from './views/HR/Report/ProjectReport/ProjectReport'
import TaskReport from './views/HR/Report/Task/Task'
import UserReport from './views/HR/Report/User/User'
import EmployeeReport from './views/HR/Report/Employee/Employe'
import PayslipReport from './views/HR/Payroll/Payslip/Payslip'
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

// Connecting Routes

const routes = [
  { path: '/login', name: 'Login' },

  { path: '/dashboard', name: 'Dashboard' },
  { path: '/dashboard/admin', name: 'Admin Dashboard', element: AdminDashboard },
  { path: '/dashboard/employee', name: 'Employee Dashboard', element: EmployeeDashboard },
  { path: '/dashboard/deals', name: 'Employee Deals', element: AdminDeals },
  { path: '/dashboard/leads', name: 'Employee Leads', element: AdminLeads },

  { path: '/app', name: 'App' },
  { path: '/app/chat', name: 'Chat', element: ChatApp },
  { path: '/app/call', name: 'Chat', element: CallApp },
  { path: '/app/email', name: 'Chat', element: EmailApp },
  { path: '/app/calendar', name: 'Chat', element: calendar },
  { path: '/employees', name: 'Employees' },
  { path: '/employees/all-employees', name: 'All Employees', element: Employee },
  { path: '/employees/leave-admin', name: 'Leave', element: Leave },
  { path: '/employees/holidays', name: 'Holidays', element: Holidays },
  { path: '/employees/employee-leave', name: 'EmployeeLeave', element: EmployeeLeave },
  { path: '/employees/leave-Settings', name: 'LeaveSettings', element: LeaveSettings },
  { path: '/employees/attendence-Admin', name: 'AttendenceAdmin', element: AttendenceAdmin },
  {
    path: '/employees/attendence-Employee',
    name: 'AttendenceEmployee',
    element: AttendenceEmployee,
  },
  { path: '/employees/departments', name: 'Departments', element: Departments },
  { path: '/employees/designations', name: 'Designations', element: Designations },
  { path: '/employees/time-sheet', name: 'Time-Sheet', element: TimeSheet },
  { path: '/employees/shift-schedules', name: 'Shift-Schedules', element: ShiftSchedules },
  { path: '/employees/overtime', name: 'Overtime', element: OverTime },

  { path: '/clients', name: 'Clients', element: Clients },
  { path: '/contacts', name: 'Contacts', element: Contacts },
  { path: '/companies', name: 'Companies', element: Companies },
  { path: '/deals', name: 'Deals', element: Deals },
  { path: '/leads', name: 'Leads', element: Lead },
  { path: '/activity', name: 'Activity', element: Activity },
  { path: '/sales', name: 'Sales' },
  { path: '/sales/estimates', name: 'Estimates', element: EstimatesSales },
  { path: '/sales/invoices', name: 'Invoices', element: Invoices },
  { path: '/sales/payments', name: 'Payments', element: Payments },
  { path: '/sales/expences', name: 'Expenses', element: Expenses },
  { path: '/sales/provident-fund', name: 'Providentfund', element: PprovidentFund },
  { path: '/sales/taxes', name: 'Taxes', element: Taxes },
  { path: '/accounting', name: 'Accounting' },
  { path: '/accounting/categories', name: 'Categories', element: Categories },
  { path: 'accounting/budgets', name: 'Budgets', element: Budgets },
  { path: '/accounting/budgets-expenses', name: 'Budgets Expenses', element: BudgetsExpenses },
  { path: '/accounting/budgets-revenues', name: 'Budgets Revenues', element: BudgetsRevenues },
  { path: '/payroll', name: 'Payroll' },
  { path: '/payroll/employee-salary', name: 'Employee salary', element: EmployeeSalary },
  { path: '/payroll/payslip', name: 'Payslip', element: Payslip },
  { path: '/payroll/payroll-items', name: 'Payroll Items', element: PayrollItems },
  { path: '/polices', name: 'Polices' },
  { path: '/polices/company-polices', name: 'Company Polices', element: ConpanyPolices },
  { path: '/polices/employee-polices', name: 'Employee Polices', element: EmployeePolices },
  { path: '/report', name: 'Reports' },
  { path: '/report/expense-report', name: 'Expense Reports', element: ExpenseReports },
  { path: '/report/invoices-report', name: 'Invoices Reports', element: InvoiceReport },
  { path: '/report/payments-report', name: 'Payments Reports', element: PaymentReport },
  { path: '/report/projects-report', name: 'Project Reports', element: ProjectReport },
  { path: '/report/task-report', name: 'Task Reports', element: TaskReport },
  { path: '/report/user-report', name: 'User Reports', element: UserReport },
  { path: '/report/employee-report', name: 'Employee Reports', element: EmployeeReport },
  { path: '/report/payslip-report', name: 'Payslip Reports', element: PayslipReport },
  { path: '/report/attendence-report', name: 'Attendence Reports', element: AttendenceReport },
  { path: '/report/leave-report', name: 'Leave Reports', element: LeaveReport },
  { path: '/report/daily-report', name: 'Daily Reports', element: DailyReport },
  { path: '/performance', name: 'Performance' },
  {
    path: '/performance/performance-indicator',
    name: 'Performance Indicators',
    element: PerformanceIndicator,
  },
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
  { path: '/settings/role-list', name: 'Role & Permission', element: Role },
  { path: '/settings/notification', name: 'Notifications', element: Notification },
]

export default routes
