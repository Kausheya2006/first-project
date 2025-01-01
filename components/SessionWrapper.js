"use client"

import { SessionProvider } from "next-auth/react"
// from next-auth docs
export default function SessionWrapper({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}