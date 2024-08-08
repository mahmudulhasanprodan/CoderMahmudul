import React from 'react'

const Contactitem = ({labelInput,className,inputType,inputId,inputClass,inputPlaceholder}) => {
  return (
    <>
      <div className="flex flex-col">
        <label
          className={"font-FontFamily text-lg font-bold text-[#465979]"}
          htmlFor={labelInput}
        >
          {labelInput}
        </label>
        <input
          className={className}
          type={inputType}
          id={inputId}
          class={inputClass}
          placeholder={inputPlaceholder}
        />
      </div>
    </>
  );
}

export default Contactitem
