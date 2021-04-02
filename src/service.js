const API_URL = 'https://veterinaria-vanillajs-backend.vercel.app';

export const listarEntidad = async ({ entidad = "mascotas" }) => {
  try {
    const res = await fetch(`${API_URL}/${entidad}`);
    const datos = await res.json();
    return datos;
  } catch (error) {
    console.log({ error });
  }
}

export const crearEditarEntidad = async ({ entidad = "mascotas", objeto = {}, method = "POST", idObjeto = null }) => {
  try {
    let url = null;
    if (method === 'PUT' && (idObjeto || idObjeto === 0)) {
      url = `${API_URL}/${entidad}/${idObjeto}`;
    } else if (method === 'POST') {
      url = `${API_URL}/${entidad}`
    }
    if (!url) {
      throw new Error('No cumple criterios de envio');
    }
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objeto),
    });
    const datos = await res.json();
    return datos;
  } catch (error) {
    console.log({ error });
  }
}