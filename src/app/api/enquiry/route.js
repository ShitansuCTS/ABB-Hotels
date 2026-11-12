
import { NextResponse } from "next/server";
import { sendBookingEnquiryEmail } from "@/lib/email";

export async function POST(request) {
    try {
        const {
            name,
            email,
            phone,
            checkIn,
            checkOut,
            guests,
            rooms,
            message,
        } = await request.json();

        // Validate required fields
        if (
            !name?.trim() ||
            !email?.trim() ||
            !phone?.trim() ||
            !checkIn ||
            !checkOut
        ) {
            return NextResponse.json(
                { message: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.trim())) {
            return NextResponse.json(
                { message: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        // Validate booking dates
        if (new Date(checkOut) <= new Date(checkIn)) {
            return NextResponse.json(
                { message: "Check-out date must be after check-in date." },
                { status: 400 }
            );
        }

        // Send booking enquiry email using Resend
        await sendBookingEnquiryEmail({
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            checkIn,
            checkOut,
            guests: Number(guests) || 1,
            rooms: Number(rooms) || 1,
            message: message?.trim() || "",
        });

        return NextResponse.json(
            {
                success: true,
                message: "Your booking enquiry has been sent successfully!",
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Booking Enquiry API Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to send your enquiry right now. Please try again.",
            },
            { status: 500 }
        );
    }
}
