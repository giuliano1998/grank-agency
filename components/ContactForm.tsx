"use client";

export default function ContactForm() {
  return (
    <form
      className="max-w-xl mx-auto flex flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 rounded-lg px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 rounded-lg px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        className="w-full bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 rounded-lg px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        className="w-full bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 rounded-lg px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        className="w-full bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 rounded-lg px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium uppercase tracking-widest px-12 py-4 rounded-lg transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </form>
  );
}
