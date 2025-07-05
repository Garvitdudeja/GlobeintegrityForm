import axios from 'axios';

export async function POST(request) {
  try {
    const { data } = await request.json(); // JSON object
    console.log("Incoming data:", data);

    // Prepare form-data object
    const formData = new FormData();
    formData.append('arguments', JSON.stringify(data));

    const targetApiUrl = 'https://www.zohoapis.com/crm/v7/functions/add_leads/actions/execute' +
      '?auth_type=apikey&zapikey=1003.ea52eed87a0014942321fe35b0a9b557.2958e2de5bb055884936bb746b431c82';

    const response = await axios.post(targetApiUrl, formData, {
      headers: formData.getHeaders 
        ? formData.getHeaders() 
        : { 'Content-Type': 'multipart/form-data' } // browser vs Node.js
    });
    console.log(response.data.details.userMessage, "response")

    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error("Zoho API error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
