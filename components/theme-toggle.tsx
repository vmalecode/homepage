"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useRef } from "react"


export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const locked = useRef(false)

  const toggleTheme = () => {
    if (locked.current) return
    locked.current = true

    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next)

    setTimeout(() => {
      locked.current = false
    }, 1)
  }

  return (
    <button className="h-7 w-7 border-0 bg-transparent flex" onClick={() => toggleTheme()}>
      <Sun className="h-7 w-7 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="h-7 w-7 absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </button >
  )
}

