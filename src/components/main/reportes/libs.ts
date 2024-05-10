import admin from '../../../assets/reportsMenu/admin.svg';
import till from '../../../assets/reportsMenu/till.svg';
import employee from '../../../assets/reportsMenu/employee.svg';
import indicator from '../../../assets/reportsMenu/indicator.svg';
import cash from '../../../assets/reportsMenu/cash.svg';
import clock from '../../../assets/reportsMenu/time.svg';
import stars from '../../../assets/reportsMenu/custom.svg';
// Second layout
import crossReportIcon from '../../../assets/reportsMenu/crossReport.svg';
import presentIcon from '../../../assets/reportsMenu/presentIcon.svg';
import reportIcon from '../../../assets/reportsMenu/reportIcon.svg';
import cashIcon from '../../../assets/reportsMenu/cashIcon.svg';
import printIcon from '../../../assets/reportsMenu/printIcon.svg';
import discountIcon from '../../../assets/reportsMenu/discountIcon.svg';
import bloquedIcon from '../../../assets/reportsMenu/bloquedIcon.svg';
import tableIcon from '../../../assets/reportsMenu/tablesIcon.svg';
import timeIcon from '../../../assets/reportsMenu/timeIcon.svg';
import transferIcon from '../../../assets/reportsMenu/transferIcon.svg';

type iconPath = string;
type reportValue = string;

interface Report {
  tittle: string;
  value: reportValue;
  icon: iconPath;
}

// Initial state
export const INITIAL_STATE = 'INITIAL_STATE';

//first layout
export const SET_ADMINISTRATION: reportValue = 'SET_ADMINISTRATION';
export const SET_TILL: reportValue = 'SET_TILL';
export const SET_EMPLOYEES: reportValue = 'SET_EMPLOYEES';
export const SET_KPI_INDICATORS: reportValue = 'SET_KPI_INDICATORS';
export const SET_SELLS: reportValue = 'SET_SELLS';
export const SET_CHANGES_HISTORY: reportValue = 'SET_CHANGES_HISTORY';
export const SET_CUSTOM_REPORTS: reportValue = 'SET_CUSTOM_REPORTS';

// Second layout
// Administration
export const CANCEL_ACCOUNT_REPORT: reportValue = 'CANCEL_ACCOUNT_REPORT';
export const CANCEL_NOTES_REPORT: reportValue = 'CANCEL_NOTES_REPORT';
export const CANCEL_PRODUCTS_REPORT: reportValue = 'CANCEL_PRODUCTS_REPORT';
export const PRODUCTS_COURTESY_REPORT: reportValue = 'PRODUCTS_COURTESY_REPORT';
export const NOTES_COURTESY_REPORT: reportValue = 'NOTES_COURTESY_REPORT';
export const ACCOUNT_COURTESY_REPORT: reportValue = 'ACCOUNT_COURTESY_REPORT';
export const ACCOUNT_FINALLY_REPORT: reportValue = 'ACCOUNT_FINALLY_REPORT';
export const PAYMENTS_REPORT: reportValue = 'PAYMENTS_REPORT';
export const REOPEN_ACCOUNTS_REPORT: reportValue = 'REOPEN_ACCOUNTS_REPORT';
export const PRINT_ACCOUNTS_REPORT: reportValue = 'PRINT_ACCOUNTS_REPORT';
export const DISCOUNT_ACCOUNTS_REPORT: reportValue = 'DISCOUNT_ACCOUNTS_REPORT';
export const DISCOUNT_NOTES_REPORT: reportValue = 'DISCOUNT_NOTES_REPORT';
export const DISCOUNT_PRODUCTS_REPORT: reportValue = 'DISCOUNT_PRODUCTS_REPORT';
export const DISABLED_PRODUCTS_REPORT: reportValue = 'DISABLED_PRODUCTS_REPORT';
export const MOVE_TABLES_REPORT: reportValue = 'MOVE_TABLES_REPORT';
export const TIME_STATUS_REPORT: reportValue = 'TIME_STATUS_REPORT';
export const TRANSFER_ACCOUNTS_REPORT: reportValue = 'REPORT_ACCOUNTS_REPORT';
export const TRANSFER_PRODUCTS_REPORT: reportValue = 'TRANSFER_PRODUCTS_REPORT';
export const CLOSED_PERIOD_REPORT: reportValue = 'CLOSED_PERIOD_REPORT';

//first layout
export const reports: Report[] = [
  { tittle: 'Administración', value: SET_ADMINISTRATION, icon: admin },
  { tittle: 'Caja', value: SET_TILL, icon: till },
  { tittle: 'Empleados', value: SET_EMPLOYEES, icon: employee },
  { tittle: 'Indicadores KPI', value: SET_KPI_INDICATORS, icon: indicator },
  { tittle: 'Ventas', value: SET_SELLS, icon: cash },
  { tittle: 'Historial de cambios', value: SET_CHANGES_HISTORY, icon: clock },
  { tittle: 'Personalizados', value: SET_CUSTOM_REPORTS, icon: stars },
];

// Second layout
export const adminReports: Report[] = [
  {
    tittle: 'Cuentas canceladas',
    value: CANCEL_ACCOUNT_REPORT,
    icon: crossReportIcon,
  },
  {
    tittle: 'Notas canceladas',
    value: CANCEL_NOTES_REPORT,
    icon: crossReportIcon,
  },
  {
    tittle: 'Productos cancelados',
    value: CANCEL_PRODUCTS_REPORT,
    icon: crossReportIcon,
  },
  {
    tittle: 'Cortesías de productos',
    value: PRODUCTS_COURTESY_REPORT,
    icon: presentIcon,
  },
  {
    tittle: 'Cortesías de notas',
    value: NOTES_COURTESY_REPORT,
    icon: presentIcon,
  },
  {
    tittle: 'Cortesías de cuentas',
    value: ACCOUNT_COURTESY_REPORT,
    icon: presentIcon,
  },
  {
    tittle: 'Cuentas pagadas',
    value: ACCOUNT_FINALLY_REPORT,
    icon: reportIcon,
  },
  {
    tittle: 'Pagos',
    value: PAYMENTS_REPORT,
    icon: cashIcon,
  },
  {
    tittle: 'Cuentas reabiertas',
    value: REOPEN_ACCOUNTS_REPORT,
    icon: reportIcon,
  },
  {
    tittle: 'Impresiones de la cuenta',
    value: PRINT_ACCOUNTS_REPORT,
    icon: printIcon,
  },
  {
    tittle: 'Descuentos en cuentas',
    value: DISCOUNT_ACCOUNTS_REPORT,
    icon: discountIcon,
  },
  {
    tittle: 'Descuentos en notas',
    value: DISCOUNT_NOTES_REPORT,
    icon: discountIcon,
  },
  {
    tittle: 'Descuentos en productos',
    value: DISCOUNT_PRODUCTS_REPORT,
    icon: discountIcon,
  },
  {
    tittle: 'Productos desactivados',
    value: DISABLED_PRODUCTS_REPORT,
    icon: bloquedIcon,
  },
  {
    tittle: 'Rotacion de mesas',
    value: MOVE_TABLES_REPORT,
    icon: tableIcon,
  },
  {
    tittle: 'Tiempo de estatus en cuenta',
    value: TIME_STATUS_REPORT,
    icon: timeIcon,
  },
  {
    tittle: 'Transferencia de cuentas',
    value: TRANSFER_ACCOUNTS_REPORT,
    icon: transferIcon,
  },
  {
    tittle: 'Transferencia de productos',
    value: TRANSFER_PRODUCTS_REPORT,
    icon: transferIcon,
  },
  {
    tittle: 'Cierre del periodo operativo',
    value: CLOSED_PERIOD_REPORT,
    icon: transferIcon,
  },
];
