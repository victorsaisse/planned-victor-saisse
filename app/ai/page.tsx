"use client";

export default function Demo() {
  const handleAskAI = async () => {
    console.log("Ask AI");
    const response = await fetch("/api/call-open-ai", {
      method: "POST",
      body: JSON.stringify({ prompt: "What is love?" }),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <button onClick={handleAskAI}>Ask AI</button>
    </div>
  );
}
