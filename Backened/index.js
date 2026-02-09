require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

/* ================= ENQUIRY API ================= */
app.post("/api/enquiry", async (req, res) => {
    const { name, email, company, country, serviceType, message } = req.body;

    if (!name || !email || !company || !country || !serviceType || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        /* ADMIN EMAIL */
        await transporter.sendMail({
            from: `"Trade Portal" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "📩 New Trade Inquiry",
            html: `
                <h3>New Inquiry</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Company:</b> ${company}</p>
                <p><b>Country:</b> ${country}</p>
                <p><b>Service:</b> ${serviceType}</p>
                <p><b>Message:</b> ${message}</p>
            `
        });

        /* AUTO REPLY */
        await transporter.sendMail({
            from: `"Trade Portal" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Thanks for contacting us",
            html: `
                <p>Hello ${name},</p>
                <p>Thank you for your inquiry. Our team will contact you soon.</p>
                <br/>
                <p>Regards,<br/>Trade Portal Team</p>
            `
        });

        res.json({ message: "Inquiry sent successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Email sending failed" });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Backend running on port ${process.env.PORT}`);
});
