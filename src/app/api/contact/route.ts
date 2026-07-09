import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { sendEmail } from '@/lib/resend'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parseResult = contactSchema.safeParse(body)

  if (!parseResult.success) {
    const firstError = parseResult.error.issues[0]?.message ?? 'Invalid input'
    return NextResponse.json({ error: firstError }, { status: 400 })
  }

  const { name, email, subject, message } = parseResult.data

  try {
    const result = await sendEmail({
      to: process.env.RESEND_TO_EMAIL ?? 'hello@myli.dev',
      fromName: name,
      replyTo: email,
      subject: `Nouveau message portfolio : ${subject}`,
      html: `<p><strong>Nom :</strong> ${name}</p><p><strong>Email :</strong> ${email}</p><p><strong>Objet :</strong> ${subject}</p><p><strong>Message :</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
      text: `Nom : ${name}\nEmail : ${email}\nObjet : ${subject}\n\n${message}`,
    })

    if (result.error) {
      console.error('Resend API Error:', result.error)
      return NextResponse.json({ error: result.error.message }, { status: 400 })
    }

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error: any) {
    console.error('Contact Route Exception:', error)
    return NextResponse.json({ error: error.message || 'Unable to send email', details: String(error) }, { status: 500 })
  }
}
