import React from 'react'

type Props = {
  children:React.ReactNode
}

function Layout({children}: Props) {
  return (
    <div>
      Nav
      {children}
      Footer
    </div>
  )
}

export default Layout