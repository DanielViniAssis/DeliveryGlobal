export const createOrder = async (orderData) => {
  try {
    const response = await fetch("http://localhost:8000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) throw new Error("Erro ao criar pedido");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
