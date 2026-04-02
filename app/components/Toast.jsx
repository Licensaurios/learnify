// components/Toast.jsx
'use client'

import { useEffect } from 'react'

export default function Toast() {
  useEffect(() => {
    import('wc-toast')
  }, [])

  return <wc-toast></wc-toast>
}