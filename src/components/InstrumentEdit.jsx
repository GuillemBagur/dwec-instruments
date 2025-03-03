import React from 'react'
import { Link } from 'react-router-dom';

export default function InstrumentEdit({ instrumentId }) {
  return <Link to={`/editor/${instrumentId}`} className="button">Editar</Link>;
}
