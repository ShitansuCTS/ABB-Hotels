import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEnquiryEmail(data) {
    const {
        name,
        email,
        phone,
        checkIn,
        checkOut,
        guests,
        rooms,
        message,
    } = data;

    const { data: result, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: [process.env.CONTACT_EMAIL],
        replyTo: email,
        subject: `New Booking Enquiry - ${name}`,
        html: `
      <h2>New Booking Enquiry - ABB Hotel</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Check-in:</strong> ${checkIn}</p>
      <p><strong>Check-out:</strong> ${checkOut}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Rooms:</strong> ${rooms}</p>
      <p><strong>Message:</strong> ${message || "N/A"}</p>
    `,
    });

    if (error) {
        console.error("Resend Error:", error);
        throw new Error(error.message);
    }

    return result;
}