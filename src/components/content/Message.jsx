import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Message = ({ type, msg }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [msg]);

  const typeClasses = {
    error: 'bg-red-100 border border-red-400 text-red-700',
    success: `bg-green-100 border border-green-400 text-green-700`,
    alert: 'bg-yellow-100 border border-yellow-400 text-yellow-700',
  };

  const messageClassName = `relative px-4 py-3 rounded mb-10 ${typeClasses[type]}`;

  return (
    <>
      {visible && (
        <div className={messageClassName} role="alert">
          <span className="block sm:inline">{msg}</span>
        </div>
      )}
    </>
  );
};

Message.propTypes = {
  type: PropTypes.oneOf(['error', 'success', 'alert']).isRequired,
  msg: PropTypes.string.isRequired,
};

export default Message;