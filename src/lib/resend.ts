import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY

export async function sendEmail({
  to,
  fromName,
  replyTo,
  subject,
  html,
  text,
}: {
  to: string
  fromName?: string
  replyTo?: string
  subject: string
  html: string
  text: string
}) {
  if (!apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('RESEND_API_KEY is not set. Email send skipped in development.')

      const mockResponse = {
        id: 'dev-email-sent',
        status: 'skipped',
      } as const

      return Promise.resolve(mockResponse)
    }

    throw new Error('Missing RESEND_API_KEY environment variable')
  }

  const resend = new Resend(apiKey)
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'no-reply@myli.dev'
  const fromString = fromName ? `${fromName} <${fromEmail}>` : fromEmail

  return resend.emails.send({
    from: fromString,
    to,
    replyTo: replyTo,
    subject,
    html,
    text,
  })
}
