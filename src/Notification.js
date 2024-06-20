import React, { useEffect } from 'react';
import './Notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

function Notification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500); // Устанавливаем время на 2.5 секунды

    const handleClick = () => {
      onClose();
    };

    document.addEventListener('click', handleClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  return (
    <div className="notification">
      <div className="notification-content">
        <FontAwesomeIcon icon={faCheckCircle} className="notification-icon" />
        <span className="notification-text">{message}</span>
        <FontAwesomeIcon icon={faTimes} className="notification-close" onClick={onClose} />
      </div>
    </div>
  );
}

export default Notification;
