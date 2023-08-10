//TODO comentar
export const Input = ({ label, placeholder, onChange, ...props }) => {
    return (
      <div>
        <span>{label}</span>
        <input
          className="form__input"
          placeholder={placeholder || label}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  };