type AuthValueModules = boolean;
type ActionValue = string;
type ActionNameValue = string;
type SecurityValue = boolean;
type SellTypeName = string;
type SellTypeValue = string;
type adminModuleName = string;
type adminModuleValue = String;

// Modules auth values
const APP_ENABLE: AuthValueModules = true;
const APP_DISABLE: AuthValueModules = false;

// Apps
export const ADMIN_APP: string = 'Administrador';
export const POS_APP: string = 'Punto de venta';

// Actions auth
export const CHANGE_BILL_NAME_AUTH: ActionValue = 'CHANGE_BILL_NAME_AUTH';
export const ADD_BILL_COMMENTS_AUTH: ActionValue = 'ADD_BILL_COMMENTS_AUTH';
export const CHANGE_NOTE_NAME_AUTH: ActionValue = 'CHANGE_NOTE_NAME_AUTH';
export const SEPARATE_NOTES_AUTH: ActionValue = 'SEPARATE_NOTES_AUTH';
export const TRANSFER_PRODUCTS_AUTH: ActionValue = 'TRANSFER_PRODUCTS_AUTH';
export const MOVE_TABLE_AUTH: ActionValue = 'MOVE_TABLE_AUTH';
export const DISCOUNT_PRODUCTS_AUTH: ActionValue = 'DISCOUNT_PRODUCTS_AUTH';
export const DISCOUNT_NOTES_AUTH: ActionValue = 'DISCOUNT_NOTES_AUTH';
export const DISCOUNT_BILL_AUTH: ActionValue = 'DISCOUNT_BILL_AUTH';
export const COURTESY_PRODUCTS_AUTH: ActionValue = 'COURTESY_PRODUCTS_AUTH';
export const COURTESY_NOTE_AUTH: ActionValue = 'COURTESY_NOTE_AUTH';
export const COURTESY_BILL_AUTH: ActionValue = 'COURTESY_BILL_AUTH';
export const CANCEL_NOTE_AUTH: ActionValue = 'CANCEL_NOTE_AUTH';
export const CANCEL_PRODUCT_AUTH: ActionValue = 'CANCEL_PRODUCT_AUTH';
export const CANCEL_BILL_AUTH: ActionValue = 'CANCEL_BILL_AUTH';

// SellTypes
export const RESTAURANT = 'RESTAURANT';
export const RAPPI = 'RAPPI';

// Admin modules
const DASHBOARD_MODULE = 'DASHBOARD_MODULE';
const CATALOGOS_MODULE = 'CATALOGOS_MODULE';

interface AuthModule {
  name: string;
  enable: AuthValueModules;
  disable: AuthValueModules;
}

interface AuthAction {
  name: ActionNameValue;
  value: ActionValue;
  secure: SecurityValue;
}

interface selltypesAuth {
  name: SellTypeName;
  value: SellTypeValue;
}

interface AdminModule {
  name: adminModuleName;
  value: adminModuleValue;
}

// Authorizations by modules
export const appsAuth: AuthModule[] = [
  {
    name: ADMIN_APP,
    enable: APP_ENABLE,
    disable: APP_DISABLE,
  },
  {
    name: POS_APP,
    enable: APP_ENABLE,
    disable: APP_DISABLE,
  },
];

// POS Sell types
export const SellTypes: selltypesAuth[] = [
  {
    name: 'Restaurante',
    value: RESTAURANT,
  },
  {
    name: 'Rappi',
    value: RAPPI,
  },
];

export const adminModules: AdminModule[] = [
  {
    name: 'Dashboard',
    value: DASHBOARD_MODULE,
  },
  {
    name: 'Catalogos',
    value: CATALOGOS_MODULE,
  },
];

export const actionsAuthsRestaurant: AuthAction[] = [
  {
    name: 'Nombre de la cuenta',
    value: CHANGE_BILL_NAME_AUTH,
    secure: false,
  },
  {
    name: 'Comentarios',
    value: ADD_BILL_COMMENTS_AUTH,
    secure: false,
  },
  {
    name: 'Nombre de las notas',
    value: CHANGE_NOTE_NAME_AUTH,
    secure: false,
  },
  {
    name: 'Separar notas',
    value: SEPARATE_NOTES_AUTH,
    secure: false,
  },
  {
    name: 'Transferir productos',
    value: TRANSFER_PRODUCTS_AUTH,
    secure: false,
  },
  {
    name: 'Cambiar mesa',
    value: MOVE_TABLE_AUTH,
    secure: false,
  },
  {
    name: 'Descuentos en productos ',
    value: DISCOUNT_PRODUCTS_AUTH,
    secure: false,
  },
  {
    name: 'Descuentos en notas',
    value: DISCOUNT_NOTES_AUTH,
    secure: false,
  },
  {
    name: 'Descuentos en cuenta',
    value: DISCOUNT_BILL_AUTH,
    secure: false,
  },
  {
    name: 'Cortesías de producto',
    value: COURTESY_PRODUCTS_AUTH,
    secure: false,
  },
  {
    name: 'Cortesías de nota',
    value: COURTESY_NOTE_AUTH,
    secure: false,
  },
  {
    name: 'Cortesías de cuenta',
    value: COURTESY_BILL_AUTH,
    secure: false,
  },
  {
    name: 'Cancelar productos',
    value: CANCEL_PRODUCT_AUTH,
    secure: false,
  },
  {
    name: 'Cancelar notas',
    value: CANCEL_NOTE_AUTH,
    secure: false,
  },
  {
    name: 'Cancelar cuenta',
    value: CANCEL_BILL_AUTH,
    secure: false,
  },
];
