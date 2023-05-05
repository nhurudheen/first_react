import React from 'react'

const DesignButton = ({buttonText , bgColor, textColor }) => {
  return (
    <div>
        <button type="button"  className={`text-sm bg-${bgColor} px-5 py-2 border-black border-[1px] rounded-xl text-${textColor} font-bold`}>{buttonText}</button>
    </div>
  )
}

export default DesignButton