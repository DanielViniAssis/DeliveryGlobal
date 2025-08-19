
export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/products");
    if (!response.ok) throw new Error("Erro ao buscar produtos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
