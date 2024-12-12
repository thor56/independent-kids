
import React from 'react';

interface AlertProps {
  message: string;
  type?: 'error' | 'success' | 'warning' | 'info';
}

const Alert: React.FC<AlertProps> = ({ message, type = 'error' }) => {
  const styles = {
    error: 'bg-red-50 text-red-600 border-red-200',
    success: 'bg-green-50 text-green-600 border-green-200',
    warning: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    info: 'bg-blue-50 text-blue-600 border-blue-200'
  };

  return (
    <div className={`p-4 border rounded-lg ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Alert;