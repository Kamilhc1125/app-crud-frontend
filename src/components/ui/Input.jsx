const Input = ({ id, label, name, defaultValue, onChange, isDisabled = false, pattern }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        id={id}
        name={name}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-sm"
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={isDisabled ? true : ""}
        pattern={pattern}
      />
    </label>
  )
}

export default Input;
