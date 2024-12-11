"use client";

export const ButtonWithError = () => {
  return (
    <button
        type="button"
        style={{
            padding: "12px",
            cursor: "pointer",
            backgroundColor: "#AD6CAA",
            borderRadius: "4px",
            border: "none",
            color: "white",
            fontSize: "14px",
            margin: "18px",
        }}
        onClick={() => {
            throw new Error('Error from packages/ui/src/buttonWithError.tsx');
        }}
    >
    Throw error from packages/ui/src/buttonWithError.tsx
    </button>
  );
};