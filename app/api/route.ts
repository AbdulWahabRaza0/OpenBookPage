import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// const transporter = nodemailer.createTransport({
//   secure: false,
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

export async function POST(request: Request, response: Response) {
  // console.log("email is ", process.env.EMAIL_USERNAME);
  // console.log("This is password ", process.env.EMAIL_PASSWORD);
  const body = await request.json();
  // console.log(body);
  const { name, email, linkedIn } = body;
  console.log("This is name, email and linkedin ", name, email, linkedIn);
  // const mailOptions = {
  //   from: `${email}`,
  //   to: process.env.EMAIL_USERNAME,
  //   subject: `New message for ${name}`,
  //   text: `
  //       Name: ${name}
  //       Email: ${email}
  //       LinkedIn: ${linkedIn}
  //     `,
  // };
  try {
    // await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
