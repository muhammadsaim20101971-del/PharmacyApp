import React, { createContext, useContext, useState, useEffect } from "react";

const OrdersContext = createContext();

export const ORDER_STAGES = ["Placed", "Confirmed", "Out for delivery", "Delivered"];

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders((prev) => [
      {
        ...order,
        stageIndex: 0,
        placedAt: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      },
      ...prev,
    ]);
  };

  // Simulated progression: every 8 seconds, advance any in-progress order to the next stage.
  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prev) =>
        prev.map((order) =>
          order.stageIndex < ORDER_STAGES.length - 1
            ? { ...order, stageIndex: order.stageIndex + 1 }
            : order
        )
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrdersContext);
}