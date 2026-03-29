"use client"

import * as React from "react"

// This hook is used to prevent scrolling on the body when a modal is open
export function useLockBody() {
  React.useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])
}
