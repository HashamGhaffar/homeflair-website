import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./CheckoutIntegrationSample.css";

declare global {
  interface Window {
    Worldpay: {
      checkout: {
        init: (
          config: WorldpayCheckoutConfig,
          callback: (
            error: Error | null,
            checkoutInstance: WorldpayCheckoutInstance
          ) => void
        ) => void;
      };
    };
  }
}
interface WorldpayCheckoutConfig {
  id: string;
  form: string;
  fields: {
    pan: { selector: string };
    expiry: { selector: string };
    cvv: { selector: string };
  };
  styles?: {
    [key: string]: { color: string };
  };
  enablePanFormatting?: boolean;
}

interface WorldpayCheckoutInstance {
  generateSessionState: (
    callback: (error: Error | null, session: string) => void
  ) => void;
  clearForm: (callback?: () => void) => void;
  remove: () => void;
}

function scriptAlreadyLoaded(src: string): boolean {
  return !!document.querySelector(`script[src="${src}"]`);
}

function loadCheckoutScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (scriptAlreadyLoaded(src)) {
      resolve();
      return;
    }

    const checkoutScript = document.createElement("script");
    checkoutScript.src = src;
    checkoutScript.onload = () => resolve();
    checkoutScript.onerror = () => reject(new Error("Failed to load script."));
    document.head.appendChild(checkoutScript);
  });
}

function addWorldpayCheckoutToPage(): Promise<WorldpayCheckoutInstance> {
  const id = "dd0ea6d1-6a59-4fc2-89b3-f50296d7aec5";
  return new Promise((resolve, reject) => {
    window.Worldpay.checkout.init(
      {
        id: id,
        form: "#container",
        fields: {
          pan: { selector: "#card-pan" },
          expiry: { selector: "#card-expiry" },
          cvv: { selector: "#card-cvv" },
        },
        styles: {
          "input.is-valid": { color: "green" },
          "input.is-invalid": { color: "red" },
          "input.is-onfocus": { color: "black" },
        },
        enablePanFormatting: true,
      },
      (error: Error | null, checkout: WorldpayCheckoutInstance) => {
        if (error) {
          reject(error);
        } else {
          resolve(checkout);
        }
      }
    );
  });
}

const CheckoutIntegrationSample: React.FC = () => {
  const checkoutRef = useRef<WorldpayCheckoutInstance | null>(null);
  const checkoutScriptUrl =
    "https://try.access.worldpay.com/access-checkout/v2/checkout.js";

  const generateSession = (): void => {
    if (checkoutRef.current) {
      checkoutRef.current.generateSessionState(
        (error: Error | null, session: string) => {
          if (error) {
            console.warn(`Failed to generate session: ${error}`);
            return;
          }
          const infoDiv = document.querySelector(".info");
          if (infoDiv) {
            infoDiv.innerHTML += `<div>Session retrieved is ${session}</div>`;
          }
          // Proceed to perform the payment request
          performPaymentRequest(session);
        }
      );
    }
  };

  const performPaymentRequest = async (session: unknown) => {
    const paymentData = {
      sessionUrl: session,
    };

    try {
      const response = await fetch("http://localhost:4000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const result = await response.json();
      console.log("Payment response:", result);
      // Handle the payment response accordingly
    } catch (error) {
      console.error("Payment request failed:", error);
    }
  };

  const clearForm = (): void => {
    if (checkoutRef.current) {
      checkoutRef.current.clearForm(() => {
        const infoDiv = document.querySelector(".info");
        if (infoDiv) {
          infoDiv.innerHTML = "";
        }
      });
    }
  };

  useEffect(() => {
    loadCheckoutScript(checkoutScriptUrl)
      .then(() => addWorldpayCheckoutToPage())
      .then((checkoutInstance) => {
        checkoutRef.current = checkoutInstance;
      })
      .catch(console.warn);
  }, []);

  useLayoutEffect(() => {
    return () => {
      if (checkoutRef.current) {
        checkoutRef.current.remove();
      }
    };
  }, []);

  return (
    <section className="container" id="container">
      <section className="card">
        <section id="card-pan" className="field" />
        <section className="columns">
          <section>
            <section id="card-expiry" className="field" />
          </section>
          <section>
            <section id="card-cvv" className="field" />
          </section>
        </section>
        <section className="buttons">
          <button className="submit" type="button" onClick={generateSession}>
            Generate Session
          </button>
          <button className="clear" type="button" onClick={clearForm}>
            Clear
          </button>
        </section>
      </section>
      <div id="info" className="info" />
    </section>
  );
};

export default CheckoutIntegrationSample;
