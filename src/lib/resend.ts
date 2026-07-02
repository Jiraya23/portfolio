import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string
  subject: string
  html: string
  text: string
}) {
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable')
  }

  const resend = new Resend(apiKey)

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'no-reply@myli.dev',
    to,
    subject,
    html,
    text,
  })
}
