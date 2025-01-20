"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    passWord: "",
    emailContact: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Here you would typically call your authentication API
    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, let's just check if all fields are filled
      if (Object.values(formData).every((field) => field)) {
        // Redirect to home page on successful sign up
        router.push("/")
      } else {
        setError("Please fill in all fields")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="userName">Username</Label>
        <Input
          id="userName"
          name="userName"
          type="text"
          required
          value={formData.userName}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          required
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          name="lastName"
          type="text"
          required
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="emailContact">Email</Label>
        <Input
          id="emailContact"
          name="emailContact"
          type="email"
          autoComplete="email"
          required
          value={formData.emailContact}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="passWord">Password</Label>
        <Input
          id="passWord"
          name="passWord"
          type="password"
          autoComplete="new-password"
          required
          value={formData.passWord}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing up...
            </>
          ) : (
            "Sign up"
          )}
        </Button>
      </div>
    </form>
  )
}

