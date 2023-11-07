import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const getSolicitudesEnvio = (req, res) => {
    const q = "select \
    solicitudenvio.idsolicitudenvio, \
    solicitudenvio.descripcionsolicitud,\
    solicitudenvio.pesopaquete, \
    solicitudenvio.tarifasolicitud, \
    solicitudenvio.idsolicitudenvio,fechasolicitud, \
    solicitudenvio.destinosolicitud, \
    cliente.nombrecliente \
    from solicitudenvio \
    inner join cliente on solicitudenvio.idcliente = cliente.idcliente";

    console.log("Entro");

    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        if(data.length == 0) return res.status(409).json("No hay solicitudes de envio registradas");
        return res.status(200).json(data);
    });
}

export const deleteSolicitudEnvio = (req,res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("No estas autorizado");
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        let clienteId = req.params.idCliente;
        console.log("Aqui ", clienteId);
        if (clienteId === "") return res.status(403).json("No se ha enviado el id del cliente");

        const q = "DELETE FROM solicitudenvio WHERE idCliente = ?";

        db.query(q, [clienteId], (err, data) => {

            if (err) return res.status(403).json("No puedes borrar estas solicitudes");
            return res.status(200).json("Solicitudes borradas con exito");
        });
    });
}