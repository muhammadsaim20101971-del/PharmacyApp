import React, { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext();

export function SubscriptionProvider({ children }) {
  const [subscribedPlans, setSubscribedPlans] = useState([]);

  const isSubscribed = (planId) => {
    return subscribedPlans.some((plan) => plan.id === planId);
  };

  const subscribe = (plan) => {
    setSubscribedPlans((prev) => {
      if (prev.some((item) => item.id === plan.id)) return prev;

      const nextRefill = new Date();
      nextRefill.setDate(nextRefill.getDate() + 30);

      return [
        ...prev,
        {
          ...plan,
          subscribedOn: new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          nextRefill: nextRefill.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        },
      ];
    });
  };

  const cancelSubscription = (planId) => {
    setSubscribedPlans((prev) => prev.filter((plan) => plan.id !== planId));
  };

  return (
    <SubscriptionContext.Provider
      value={{ subscribedPlans, isSubscribed, subscribe, cancelSubscription }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  return useContext(SubscriptionContext);
}