# React + TypeScript + Vite

Transferencias miden ambas fuentes de energia (Comercial S1 | Generador S2)
host http://inss-mg2-transfer1.internal.inss.org/ //nortes selim

S1 Mantiene sus valores activos mientras haya luz comercial
	L1	    L2	    L3	    IE	    Total
V	123.2	121.8	121.3
		
A	104 	152 	122 	#

kW	12.825	18.278 	14.438  		45.387

kVA	12.595 	18.355 	14.592  		45.542

kVAr 0   	0   	0       		0

pf	1   	0.99	0.97            0.99
		

S2 mantiene sus valores apagados hasta que se vaya la luz y entre el generador


DESCARGA DE SVG (REPO BASTANTE COMPLETO)
svgrepo-com


REFERENCIAS DE MOTOR DE GENERADORES
=====================================================

COOLANT_TEMPERATURE
| Estado     | Rango      |
| ---------- | ---------- |
| 🔵 Frío    | < 60°C     |
| 🟢 Normal  | 70 – 95°C  |
| 🟡 Alto    | 95 – 105°C |
| 🔴 Crítico | > 105°C    |


ENGINE_SPEED
| Estado       | Rango           |
| ------------ | --------------- |
| 🔵 Apagado   | 0               |
| 🟢 Idle      | 600 – 900 RPM   |
| 🟢 Operación | 1500 o 1800 RPM |
| 🔴 Crítico   | > 2000 RPM      |


OIL_PRESSURE
| Estado    | Rango         |
| --------- | ------------- |
| 🔴 Bajo   | < 100 kPa     |
| 🟡 Medio  | 100 – 250 kPa |
| 🟢 Normal | 250 – 500 kPa |
| 🔴 Alto   | > 600 kPa     |

=======================================================================================

Base OID = el prefijo común del árbol SNMP de un fabricante/dispositivo.

Ejemplo:
1.3.6.1.4.1.XXXXX

1.3.6.1.4.1 = empresas privadas
XXXXX = ID del fabricante


consultas http a la direccion:
http://inss-mg2-genset1.internal.inss.org/co_inst_mod_data.cgi

{
	"POST": {
		"scheme": "http",
		"host": "inss-mg2-genset1.internal.inss.org",
		"filename": "/co_inst_mod_data.cgi",
		"remote": {
			"Dirección": "172.16.25.21:80"
		}
	}
}

Panel mains braker y gen braker available
http://inss-mg2-genset1.internal.inss.org/co_inst_mod_xml.cgi

{
	"POST": {
		"scheme": "http",
		"host": "inss-mg2-genset1.internal.inss.org",
		"filename": "/co_inst_mod_xml.cgi",
		"remote": {
			"Dirección": "172.16.25.21:80"
		}
	}
}


=====================================================================
INFO PARA ENVIO DE CORREOS

SMTP_HOST = mail.empresa.local
SMTP_PORT = 25 | 587 | 465
USER = usuario (a veces no necesario)
PASSWORD = contraseña (si aplica)
SECURE = true/false (TLS)