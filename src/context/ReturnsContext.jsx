import React, { createContext, useContext, useState, useEffect } from "react";

const ReturnsContext = createContext();

export const RETURN_STAGES = ["Requested", "Approved", "Picked up", "Refunded"];

export function ReturnsProvider({ children }) {
  const [returnRequests, setReturnRequests] = useState([]);

  const requestReturn = (order, reason) => {
    setReturnRequests((prev) => {
      if (prev.some((item) => item.orderId === order.id)) return prev;

      return [
        {
          orderId: order.id,
          items: order.items,
          total: order.total,
          reason,
          stageIndex: 0,
          requestedOn: new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        },
        ...prev,
      ];
    });
  };

  const hasReturnRequest = (orderId) => {
    return returnRequests.some((item) => item.orderId === orderId);
  };

  // Simulated progression, same pattern as order tracking.
  useEffect(() => {
    const interval = setInterval(() => {
      setReturnRequests((prev) =>
        prev.map((request) =>
          request.stageIndex < RETURN_STAGES.length - 1
            ? { ...request, stageIndex: request.stageIndex + 1 }
            : request
        )
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ReturnsContext.Provider
      value={{ returnRequests, requestReturn, hasReturnRequest }}
    >
      {children}
    </ReturnsContext.Provider>
  );
}

export function useReturns() {
  return useContext(ReturnsContext);
}