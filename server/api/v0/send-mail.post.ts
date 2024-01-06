import { createTransport } from "nodemailer";

const $runtimeConfig = useRuntimeConfig();

const transporter = createTransport({
  host: $runtimeConfig.nodemailerHost,
  port: Number($runtimeConfig.nodemailerPort),
  secure: Boolean($runtimeConfig.nodemailerSecure),
  auth: {
    user: $runtimeConfig.nodemailerUser,
    pass: $runtimeConfig.nodemailerPass,
  },
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    await transporter.sendMail({
      from: $runtimeConfig.nodemailerFrom,
      to: body?.to ?? $runtimeConfig.nodemailerTo,
      subject: body?.subject ?? "",
      html: body?.html ?? "",
    });
    return { status: true, messages: [] };
  } catch (error) {
    throw createError({ statusCode: 500 });
  }
});
