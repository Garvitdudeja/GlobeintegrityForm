import axios from 'axios';
import FormData from 'form-data';

export async function POST(request) {
  try {
    const body = await request.json();
    const { data, recaptchaToken } = body;
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
