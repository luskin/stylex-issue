"use client"
import { Button } from "@repo/ui/button"
import { useState } from "react"

export default function Page(): JSX.Element {
  const [isDestructive, setIsDestructive] = useState<boolean>(false)
  return (
    <main>
      <h1>Page</h1>
      <Button
        label="Click me to change variant"
        variant={isDestructive ? "destructive" : undefined}
        onClick={() => setIsDestructive((prev) => !prev)}
      />
    </main>
  )
}
