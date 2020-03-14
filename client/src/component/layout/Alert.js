import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { IoMdAlert } from 'react-icons/io';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alerts } = alertContext;

  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} className={`alert bg-${alert.type}`}>
        <IoMdAlert size='30' /> <span>{alert.msg}</span>
      </div>
    ))
  );
};

export default Alert;
