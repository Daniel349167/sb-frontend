import React, { useEffect, useState } from 'react';
import { getAllEntities, deleteEntity } from '../services/governmentEntity';

export default function Consulta() {
    const [entities, setEntities] = useState([]);

    useEffect(() => {
        fetchEntities();
    }, []);

    const fetchEntities = async () => {
        try {
            const data = await getAllEntities();
            setEntities(data);
        } catch (error) {
            console.error(error);
            alert('Error al cargar la lista');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Seguro que deseas eliminar esta entidad?')) {
            try {
                await deleteEntity(id);
                setEntities(entities.filter(e => e.id !== id));
            } catch (error) {
                console.error(error);
                alert('Error al eliminar');
            }
        }
    };

    return (
        <div>
            <h1>Consulta de Entidades Gubernamentales</h1>
            <table border="1" cellPadding="5" style={{ marginTop: '1rem' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th className="actions-col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {entities.map(ent => (
                        <tr key={ent.id}>
                            <td>{ent.id}</td>
                            <td>{ent.nombre}</td>
                            <td>{ent.descripcion}</td>
                            <td className="actions-col">
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(ent.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
