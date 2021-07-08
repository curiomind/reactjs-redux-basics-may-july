import React from 'react';

export default function TextFied({ label, placeholder, onChange, value, id, password, disableStatus }) {
  const handleChange = (event) => {
    if (password) {
      const confirmPassword = event.target.value;
      if (confirmPassword === password) {
        if (disableStatus) disableStatus(false);
      } else {
        if (disableStatus) disableStatus(true);
      }
    }
    onChange(event);
  };

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type="password" className="form-control" id={id} placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  );
}
