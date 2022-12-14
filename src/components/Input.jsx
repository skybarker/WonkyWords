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
    <div className="text-black max-w-min w-fit">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        className="w-fit"
        id={id}
        name={id}
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
