import PropTypes from "prop-types";

export default function Input({
  id,
  label,
  labelClass,
  type,
  defaultValue,
  handleChange,
  handleInput,
}) {
  return (
    <div className="flex flex-col gap-y-2 w-4/5 border-2">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        placeholder={label}
        type={type}
        defaultValue={defaultValue}
        onChange={handleChange}
        onInput={handleInput}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelClass: PropTypes.string,
  type: PropTypes.oneOf(["text", "search", "email", "tel", "url", "password"]),
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleInput: PropTypes.func,
};

Input.defaultProps = {
  labelClass: "sr-only",
  type: "text",
  defaultValue: "",
  handleChange: () => {},
  handleInput: () => {},
};
