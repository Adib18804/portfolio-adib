import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import mongoose from "mongoose";

// Define a simple schema for messages
const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
});

// Prevent overwriting the model if it already exists
const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const conn = await dbConnect();

        if (!conn) {
            // If no DB connection (e.g. no URI), just log it and return success for demo purposes
            console.log("Mock submission received:", body);
            return NextResponse.json({ success: true, mock: true }, { status: 200 });
        }

        await Message.create({ name, email, message });

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
