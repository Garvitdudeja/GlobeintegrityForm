// export default async function POST(req, res) {
//     const { token } = req.body;
//     const secret = process.env.RECAPTCHA_SECRETKEY;

//     try {
//       const response = await fetch(
//         `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
//         { method: 'POST' }
//       );
//       const data = await response.json();
//       if (data.success) {
//         res.status(200).json({ success: true, score: data.score });
//       } else {
//         res.status(400).json({ success: false, message: 'reCAPTCHA verification failed.' });
//       }
//     } catch (error) {
//       console.error('reCAPTCHA verification error:', error);
//       res.status(500).json({ success: false, message: 'Internal server error.' });
//     }
// }








import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.json();
    const { token } = body;
    const secret = process.env.RECAPTCHA_SECRETKEY;

    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {});
    console.log(response.data, "response")

    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error("Zoho API error:", err || err.message);
    return new Response(
      JSON.stringify({ error: err?.response?.data || err.message }),
      {
        status: err?.response?.status || 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
