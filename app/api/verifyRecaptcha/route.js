import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.json();
    const token = body?.token;
    const secret = process.env.RECAPTCHA_SECRETKEY;

    if (!token) {
      return new Response(JSON.stringify({ error: "Missing reCAPTCHA token" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', token);

    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    console.log("reCAPTCHA response:", response.data);

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error("reCAPTCHA verification error:", err?.response?.data || err.message);

    return new Response(
      JSON.stringify({ error: err?.response?.data || err.message }),
      {
        status: err?.response?.status || 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
