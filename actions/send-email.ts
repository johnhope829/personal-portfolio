"use server"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Validate the data
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill out all fields",
    }
  }

  // This is a mock implementation for preview purposes
  console.log("Form submission:", { name, email, message })

  // Simulate a delay to mimic sending an email
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "Message received! (Preview mode - no email sent)",
  }
}
