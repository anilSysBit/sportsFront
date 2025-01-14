import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
}

export const GButton:React.FC<ButtonProps>=({children,className,loading=false,...props})=> {
  return (
    <button className={`${className} ${loading && 'disabled'}`} disabled={loading} {...props}>
      {loading ? '........' : children}
    </button>
  )
}
