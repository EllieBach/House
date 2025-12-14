import React from 'react'

type ButtonProps = {
  variant?: 'dark' | 'light'
  children: React.ReactNode
  size?: 'responsive'
}

const Button = ({ variant = 'dark', children, size }: ButtonProps) => {
  const baseClasses =
    'uppercase font-medium flex items-center justify-center'

  const variants = {
    dark: 'bg-[#1E1E1E] text-white',
    light: 'bg-[] text-[#1E1E1E]',
  }

  // Responsive size
  let width = '126px';
  let height = '40px';
  if (size === 'responsive') {
    width = '100px';
    height = '34px';
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${size === 'responsive' ? 'sm:w-[126px] sm:h-[40px] w-[100px] h-[34px] text-xs sm:text-base' : ''}`}
      style={{
        width: size === 'responsive' ? undefined : width,
        height: size === 'responsive' ? undefined : height,
        clipPath:
          'polygon(0 0, 100% 0, 100% 80%, 93% 100%, 0 100%)',
      }}
    >
      {children}
    </button>
  )
}

export default Button
