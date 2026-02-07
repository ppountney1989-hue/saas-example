"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function resetPassword(formData: FormData) {
  const supabase = await createClient()

  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirm-password") as string

  if (password !== confirmPassword) {
    redirect(`/reset-password?error=${encodeURIComponent("Passwords do not match")}`)
  }

  const { error } = await supabase.auth.updateUser({ password })

  if (error) {
    redirect(`/reset-password?error=${encodeURIComponent(error.message)}`)
  }

  redirect("/login?message=Password updated successfully")
}
