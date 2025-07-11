import axios from 'axios';
import FormData from 'form-data';

export async function POST(request) {
  try {
    const body = await request.json();
    const { data, recaptchaToken } = body;

    console.log("Incoming data:", data);

    // 1. Verify reCAPTCHA token with Google
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

    const recaptchaRes = await axios.post(
      verifyUrl,
      new URLSearchParams({
        secret: recaptchaSecret,
        response: recaptchaToken,
      }).toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );

    const recaptchaData = recaptchaRes.data;
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(
        JSON.stringify({ error: 'reCAPTCHA verification failed', score: recaptchaData.score }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // 2. Send to Zoho CRM if reCAPTCHA passed
    const formData = new FormData();
    formData.append('arguments', JSON.stringify(data));

    const response = await axios.post(process.env.ZOHO_API_PATH, formData, {
      headers: formData.getHeaders()
    });

    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error("Zoho API error:", err?.response?.data || err.message);
    return new Response(
      JSON.stringify({ error: err?.response?.data || err.message }),
      {
        status: err?.response?.status || 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
