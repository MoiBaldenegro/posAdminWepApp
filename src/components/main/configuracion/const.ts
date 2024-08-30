import icon_01 from "@/assets/public/adminConfig_01.svg"
import icon_02 from "@/assets/public/adminConfig_02.svg"
import icon_03 from "@/assets/public/adminConfig_03.svg"
import icon_04 from "@/assets/public/adminConfig_04.svg"

export const SUCURSAL = "SUCURSAL"
export const CAJA_CHICA = "CAJA_CHICA"
export const PREFERENCIAS = "PREFERENCIAS"
export const NOTIFICACIONES = "NOTIFICACIONES"

export const ADMIN_CONFIGS = [
    {
        name: 'Sucursal',
        path: icon_01,
        type: SUCURSAL

    },
    {
        name: 'Caja chica',
        path: icon_02,
        type: CAJA_CHICA
    },
    {
        name: 'Preferencias',
        path: icon_03,
        type: PREFERENCIAS
    },
    {
        name: 'Notificaciones',
        path: icon_04,
        type: NOTIFICACIONES
    }
]

