import React, { useState } from 'react';
import Cliente from './utils/Cliente';
import LinkedList from './utils/LinkedList';

const clienteLista = new LinkedList();

export default function ClienteManager() {
    const [nombre, setNombre] = useState('');
    const [consulta, setConsulta] = useState('');
    const [reclamo, setReclamo] = useState('');
    const [clienteActual, setClienteActual] = useState(null);
    const [clientes, setClientes] = useState([]);

    const agregarCliente = () => {
        if (nombre.trim()) {
            const nuevo = new Cliente(nombre.trim());
            clienteLista.append(nuevo);
            setClientes(clienteLista.toArray());
            setNombre('');
        }
    };

    const seleccionarCliente = (nombre) => {
        const cliente = clienteLista.findByName(nombre);
        setClienteActual(cliente);
    };

    const agregarConsulta = () => {
        if (clienteActual && consulta.trim()) {
            clienteActual.agregarConsulta(consulta.trim());
            setConsulta('');
            setClientes(clienteLista.toArray());
        }
    };

    const agregarReclamo = () => {
        if (clienteActual && reclamo.trim()) {
            clienteActual.agregarReclamo(reclamo.trim());
            setReclamo('');
            setClientes(clienteLista.toArray());
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Gestión de Clientes</h2>

            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del cliente"
            />
            <button onClick={agregarCliente}>Agregar Cliente</button>

            <h3>Clientes:</h3>
            <ul>
                {clientes.map((c, i) => (
                    <li key={i}>
                        {c.nombre}
                        <button onClick={() => seleccionarCliente(c.nombre)}>
                            Ver Detalles
                        </button>
                    </li>
                ))}
            </ul>

            {clienteActual && (
                <div>
                    <h3>Detalles de {clienteActual.nombre}</h3>

                    <div>
                        <input
                            type="text"
                            value={consulta}
                            onChange={(e) => setConsulta(e.target.value)}
                            placeholder="Nueva consulta"
                        />
                        <button onClick={agregarConsulta}>Agregar Consulta</button>
                    </div>

                    <div>
                        <input
                            type="text"
                            value={reclamo}
                            onChange={(e) => setReclamo(e.target.value)}
                            placeholder="Nuevo reclamo"
                        />
                        <button onClick={agregarReclamo}>Agregar Reclamo</button>
                    </div>

                    <h4>Consultas:</h4>
                    <ul>
                        {clienteActual.getConsultas().map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <h4>Reclamos:</h4>
                    <ul>
                        {clienteActual.getReclamos().map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
