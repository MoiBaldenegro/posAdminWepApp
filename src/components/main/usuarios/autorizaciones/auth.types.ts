type Module = string[];
type SellTypeName = string[];

export interface SellTypesPos {
  restaurant?: SellTypeName;
}

interface ModulesAdmin {
  dashboard?: Module;
}

interface AdminInterface {
  active: boolean;
  modules: ModulesAdmin;
}

interface PosInterface {
  active: boolean;
  sellTypes: SellTypesPos;
}

export interface SendAuth {
  admin: AdminInterface;
  pos: PosInterface;
}
