import React from "react";

export default function Input({
  error,
  name,
  onChange,
  placeholder = "",
  type,
  value,
}) {
  return (
    <React.Fragment>
      <input
        type={type}
        className="registration__login--email"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {error && <p>{error}</p>}
    </React.Fragment>
  );
}
