"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://localhost:44381/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, passWord }),
      });
      if (!response.ok) {
        const error = await response.json();
        setError(error.message);
        return;
      }
      localStorage.setItem("user", await response.json());
      router.push("/");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="Username">Username</Label>
        <Input
          id="userName"
          name="userName"
          type="text"
          autoComplete="userName"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="passWord">Password</Label>
        <Input
          id="passWord"
          name="passWord"
          type="password"
          autoComplete="current-password"
          required
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
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
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </div>
    </form>
  );
}
