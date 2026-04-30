export interface Genset {
    id?: number
    name:string
    description?:string
    brand:string
    model:string
    gateway_model:string
    capacity:number
    unit_capacity:string
    host:string
    http_port:number
    http_username_encrypted:string
    http_password_encrypted:string
    snmp_version:string
    snmp_port:number
    snmp_read_community:string
    snmp_write_community:string
    is_active:boolean
    last_polled_at?:Date
    deleted_at?:Date
}