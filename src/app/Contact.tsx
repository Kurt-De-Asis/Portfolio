"use client";

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) setMessage("Message sent successfully!");
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-violet-500 mb-8">
        Contact
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Name" className="p-3 rounded-lg bg-black/40 border border-violet-800/30" />
        <input name="email" placeholder="Email" className="p-3 rounded-lg bg-black/40 border border-violet-800/30" />
        <textarea name="message" placeholder="Message" className="p-3 rounded-lg bg-black/40 border border-violet-800/30" />
        <button className="bg-violet-600 py-3 rounded-xl hover:bg-violet-700">
          Send
        </button>
      </form>

      {message && <p className="mt-4 text-green-500">{message}</p>}
    </section>
  );
}
