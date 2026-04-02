// components/ToastProvider.jsx
'use client'

import dynamic from 'next/dynamic'

const Toast = dynamic(() => import('./Toast'), { ssr: false })

export default function ToastProvider({ children }) {
  return (
    <>
      <Toast />
      {children}
    </>
  )
}