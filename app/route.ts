import { authenticator } from 'otplib'
import { z } from 'zod'

const requestSchema = z.object({
    secret: z.string(),
})

export async function GET() {
    return new Response('nothing to see here')
}

export async function POST(request: Request) {
    const body = await request.json()

    const { secret } = requestSchema.parse(body)

    const otp = authenticator.generate(secret)

    return Response.json({
        otp,
    })
}
