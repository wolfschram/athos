export async function onRequestGet({ env }) {
  try {
    const data = await env.ATHOS_VOICES.get('voices');
    const voices = data ? JSON.parse(data) : [];
    return new Response(JSON.stringify(voices), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  } catch (e) {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const { action, voice, password } = body;

    const data = await env.ATHOS_VOICES.get('voices');
    let voices = data ? JSON.parse(data) : [];

    if (action === 'add') {
      const newVoice = {
        id: Date.now().toString(),
        name: body.name || 'Anonymous',
        title: body.title || '',
        company: body.company || '',
        linkedin: body.linkedin || '',
        message: body.message || '',
        ts: new Date().toISOString()
      };
      voices.unshift(newVoice);
      await env.ATHOS_VOICES.put('voices', JSON.stringify(voices));
      return new Response(JSON.stringify({ ok: true, voice: newVoice }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    if (action === 'delete') {
      if (password !== env.VOICES_DELETE_PW) {
        return new Response(JSON.stringify({ ok: false, error: 'Wrong password' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
      voices = voices.filter(v => v.id !== body.id);
      await env.ATHOS_VOICES.put('voices', JSON.stringify(voices));
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    return new Response(JSON.stringify({ ok: false, error: 'Unknown action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
