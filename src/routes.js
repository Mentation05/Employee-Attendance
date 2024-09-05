import { element } from 'prop-types'
import React from 'react'
// ----------------------------------------------------------------//

const Login = React.lazy(() => import('./views/pages/login/Login'))
const Employee = React.lazy(() => import('./views/Employees/Employee/Emloyee'))
const Leave = React.lazy(() => import('./views/Employees/Leave/Leave'))
const Holidays = React.lazy(() => import('./views/Employees/Holidays/Holidays'))
const EmployeeLeave = React.lazy(() => import('./views/Employees/EmployeeLeave/EmployeeLeave'))
const LeaveSettings = React.lazy(() => import('./views/Employees/LeaveSettings/LeaveSettings'))
const AttendenceAdmin = React.lazy(
  () => import('./views/Employees/AttendenceAdmin/AttendenceAdmin'),
)
const AttendenceEmployee = React.lazy(
  () => import('./views/Employees/AttendenceEmployee/AttendenceEmployee'),
)
const Departments = React.lazy(() => import('./views/Employees/Departments/Departments'))
const Designations = React.lazy(() => import('./views/Employees/Designations/Designations'))
const TimeSheet = React.lazy(() => import('./views/Employees/TimeSheet/TimeSheet'))
const ShiftSchedules = React.lazy(() => import('./views/Employees/ShiftSchedules/ShiftSchedules'))
const OverTime = React.lazy(() => import('./views/Employees/OverTime/OverTime'))

const Clients = React.lazy(() => import('./views/Clients-page/Clients'))

const Contacts = React.lazy(() => import('./views/CRM/Contact/Contact'))

const Companies = React.lazy(() => import('./views/CRM/Companies/Companies'))

const Deals = React.lazy(() => import('./views/CRM/Deals/Deal'))
const Lead = React.lazy(() => import('./views/CRM/Lead/Lead'))
const Activity = React.lazy(() => import('./views/CRM/Activity/Activity'))
const EstimatesSales = React.lazy(() => import('./views/HR/Sales/EstimatesSales/EstimatesSales'))
const Invoices = React.lazy(() => import('./views/HR/Sales/Invoices/Invoices'))
const Payments = React.lazy(() => import('./views/HR/Sales/Payements/Payements'))
const Expenses = React.lazy(() => import('./views/HR/Sales/Expenses/Expenses'))
const PprovidentFund = React.lazy(() => import('./views/HR/Sales/Provident-Fund/Provident-Fund'))
const Taxes = React.lazy(() => import('./views/HR/Sales/Taxes/Taxes'))
const Categories = React.lazy(() => import('./views/HR/Accounting/Categories/Categories'))
const Budgets = React.lazy(() => import('./views/HR/Accounting/Budgest/Budgets'))
const BudgetsExpenses = React.lazy(
  () => import('./views/HR/Accounting/BudgetsExpenses/BudgetsExpenses'),
)
const BudgetsRevenues = React.lazy(
  () => import('./views/HR/Accounting/BudgetsRevenues/BudgetsRevenues'),
)
const EmployeeSalary = React.lazy(() => import('./views/HR/Payroll/EmployeeSalary/EmployeeSalary'))
const Payslip = React.lazy(() => import('./views/HR/Payroll/Payslip/Payslip'))
const PayrollItems = React.lazy(() => import('./views/HR/Payroll/PayrollItems/PayrollItems'))
const ConpanyPolices = React.lazy(() => import('./views/HR/polices/ConpanyPolices/ConpanyPolices'))
const EmployeePolices = React.lazy(
  () => import('./views/HR/polices/EmployeePolices/EmployeePolices'),
)
const ExpenseReports = React.lazy(() => import('./views/HR/Report/ExpenseReports/ExpenseReports'))
const InvoiceReports = React.lazy(() => import('./views/HR/Report/InvoiceReport/InvoiceReport'))
const PaymentReport = React.lazy(() => import('./views/HR/Report/PaymentReport/PaymentReport'))
const ProjectReport = React.lazy(() => import('./views/HR/Report/ProjectReport/ProjectReport'))
const TaskReport = React.lazy(() => import('./views/HR/Report/Task/Task'))
const UserReport = React.lazy(() => import('./views/HR/Report/User/User'))
const EmployeeReport = React.lazy(() => import('./views/HR/Report/Employee/Employe'))
const PayslipReport = React.lazy(() => import('./views/HR/Report/Payslip/Payslip'))
const AttendenceReport = React.lazy(() => import('./views/HR/Report/Attendence/Attendence'))
const LeaveReport = React.lazy(() => import('./views/HR/Report/Leave/Leave'))
const DailyReport = React.lazy(() => import('./views/HR/Report/Daily/Daily'))
const PerformanceIndicator = React.lazy(
  () => import('./views/Performance/Performance/PerformanceIndicator/PerformanceIndicator'),
)
const PerformanceReview = React.lazy(
  () => import('./views/Performance/Performance/PerformanceReviews/PerformanceReviews'),
)
const PerformanceAppraisal = React.lazy(
  () => import('./views/Performance/Performance/PerformanceAppraisal/PerformanceAppraisal'),
)
const GoalList = React.lazy(() => import('./views/Performance/Goal/GoalList/GoalList'))
const GoalType = React.lazy(() => import('./views/Performance/Goal/GoalType/GoalType'))
const TrainingList = React.lazy(
  () => import('./views/Performance/Traning/TranningList/TranningList'),
)
const Trainers = React.lazy(() => import('./views/Performance/Traning/Trainers/Trainers'))
const TrainingType = React.lazy(() => import('./views/Performance/Traning/TraningType/TraningType'))
const Promotions = React.lazy(() => import('./views/Performance/Promotions/Promotions'))
const Resigination = React.lazy(() => import('./views/Performance/Resigination/Resigination'))
const Terminatation = React.lazy(() => import('./views/Performance/Terminatation/Terminatation'))
const CompanyAssets = React.lazy(() => import('./views/CompanyAssets/CompanyAssets'))
const CompanyUsers = React.lazy(() => import('./views/CompanyUsers/CompanyUsers'))
const ChatApp = React.lazy(() => import('./views/Application/Chat/Chat'))
const CallApp = React.lazy(() => import('./views/Application/Call/Call'))
const EmailApp = React.lazy(() => import('./views/Application/Email/Email'))
const calendar = React.lazy(() => import('./views/Application/Calendar/Calendar'))
const AdminDashboard = React.lazy(() => import('./views/Dashboard/AdminDashboard/AdminDashboard'))
const EmployeeDashboard = React.lazy(
  () => import('./views/Dashboard/EmployeeDashboard/EmployeeDashboard'),
)
const AdminLeads = React.lazy(() => import('./views/Dashboard/Leads/Leads'));
const AdminDeals = React.lazy(() => import('./views/Dashboard/Deals/Deals'))

const ClientsProfile = React.lazy(() => import('./views/Clients-page/Client-Profile'))
import Role from './views/Settingss/SettingsPage/SettingsPage';
import Notification from "./views/Settingss/Notificationpage/Notificationpage";
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
  { path: '/report/invoices-report', name: 'Invoices Reports', element: InvoiceReports },
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
    element: PerformanceReview,
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
  { path: "/settings/role-list", name: 'Role & Permission', element: Role },
  {path:'/settings/notification', name:'Notifications', element: Notification}

]

export default routes
