import React from 'react'

const DesignButton = ({buttonText , bgColor, textColor, hoverColor, hover_text_color}) => {
  return (
    <div>
        <button type="button"  className={`text-sm bg-${bgColor} px-5 py-2 border-black border-[1px] rounded-xl ${textColor} font-bold hover:${hoverColor} hover:${hover_text_color} `}>{buttonText}</button>
    </div>
  )
}

export default DesignButton