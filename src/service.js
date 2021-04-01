const API_URL = 'https://veterinaria-vanillajs-backend.vercel.app';
export const listarEntidad = async ({ entidad = "mascotas" }) => {
  try {
    const res = await fetch(`${API_URL}/${entidad}`);
    const datos = await res.json();
  } catch (error) {
    console.log({ error });
  }
}