import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const handleCheckout = async (cart) => {
    console.log("Cart being sent to backend:", cart);

    if (!cart || cart.length === 0) {
        console.error("Cart is empty, cannot proceed with checkout.");
        return;
    }

    const stripe = await stripePromise;

    try {
        const response = await fetch("http://localhost:5001/api/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart }),
        });

        const data = await response.json();

        if (!data.id) {
            console.error("Session ID not received:", data);
            return;
        }

        const result = await stripe.redirectToCheckout({ sessionId: data.id });

        if (result.error) {
            console.error(result.error);
        }
    } catch (error) {
        console.error("Error in handleCheckout:", error);
    }
};


export default handleCheckout;
