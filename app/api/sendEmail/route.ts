import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequest {
    user_name: string;
    user_email: string;
    message: string;
}

export async function POST(req: Request): Promise<NextResponse> {
    try {
        const { user_name, user_email, message }: EmailRequest = await req.json();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail({
            from: `"${user_name}" <${user_email}>`,
            to: "kahyberth@gmail.com",
            subject: "Nuevo mensaje de contacto",
            text: message,
            html: `
                <h3>Nuevo mensaje de contacto</h3>
                <p><strong>Nombre:</strong> ${user_name}</p>
                <p><strong>Email:</strong> ${user_email}</p>
                <p><strong>Mensaje:</strong> ${message}</p>
            `,
        });

        return NextResponse.json({ message: "Correo enviado correctamente" }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Error al enviar el correo"}, { status: 500 });
    }
}
