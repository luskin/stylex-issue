"use client"

import * as stylex from "@stylexjs/stylex"

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: "grey",
  },
  destructive: {
    backgroundColor: "red",
  },
})

interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: "destructive"
}

export const Button = ({ label, onClick, variant }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...stylex.props(
        styles.base,
        variant === "destructive" && styles.destructive
      )}
    >
      {label}
    </button>
  )
}
