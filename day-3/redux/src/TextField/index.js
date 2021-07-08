import React from 'react';

export default function TextFied({ type, label, placeholder, onChange, value, id }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}
