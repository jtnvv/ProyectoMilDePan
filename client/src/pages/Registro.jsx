import React from "react";
import * as IoIcons from "react-icons/io5";

const Registro = () => {
    return (
        <div className="content-flex">
            <div className="divContent">
                <div className="ItemsContainer-PersonalInfo">
                    <div className="divHeaderPersonalInfo">
                        <p><i><IoIcons.IoCaretBackOutline  className="IoIconsPersonalInfo"/></i> Volver</p>
                        
                        
                    </div>
                    <div className="divBodyPersonalInfo">
                        <div className="divLeftPersonalInfo">
                            <img className="imgLeftPersonalInfo" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
                            <h2 className="usernameTxt">Nombre de Usuario</h2>
                             <input  type="text" placeholder="Nuevo nombre" />
                             <h2 className="rolTxt">"Rol"</h2>
                        </div>
                        <div className="divRightPersonalInfo">
                            <div className="top">    
                                <h1 className="tittle">Tus datos personales</h1>
                                <ul>
                                    <li>
                                        <div className="p">
                                            <p className="p-list">Número telefónico: </p>
                                            <input type="text" placeholder="+57 ( 321 ) - 747 5876." />
                                        </div>
                                    </li><br />
                                    <li>
                                        <div className="p">
                                            <p className="p-list">Correo electrónico: </p>
                                            <input type="text" placeholder="NombreU @ correo.ext" />
                                        </div>
                                    </li><br />
                                    <li>
                                        <div className="p">
                                            <p className="p-list">Número identidad: </p>
                                            <input type="text" placeholder="123456789" />
                                        </div>
                                    </li><br />
                                    <li>
                                        <div className="p">
                                            <p className="p-list">Pregunta de seguridad: </p>
                                            </div>
                                            <div className="p">
                                            
                                            <select>
                                                <option value="1">None</option>    
                                                <option value="2">Cual es tu color favorito</option>
                                                <option value="3">Ciudad en la que se casaron tus padres</option>
                                                <option value="4">Nombre de tu primera mascota</option>
                                                </select>
                                            </div>
                                             <div className="p">
                                             <input type="text" placeholder="Respuesta pregunta" />
                                             </div>


                                    </li><br />
                                </ul>
                            </div>
                            <div className="bottomRegister">
                                <div className="flex">
                                    <div className="div">
                                        <p>¿Todo listo?.</p>
                                        <button type="submit">Registrarse!</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Registro;