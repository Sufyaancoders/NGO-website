import React, { useEffect, useState } from "react";
import handsPalm from "../assets/hands-palm.avif";
import FooterSection from "@/components/footer";

// Small reusable donut (pie) chart showing percent = donated/goal
function DonutChart({ donated = 0, goal = 1, size = 120, stroke = 14, color = "#10B981" }) {
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const percent = Math.max(0, Math.min(1, goal === 0 ? 0 : donated / goal));
    const dash = `${circumference * percent} ${circumference * (1 - percent)}`;

    const center = size / 2;

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <defs>
                <filter id="soft">
                    <feGaussianBlur stdDeviation="0.5" />
                </filter>
            </defs>
            <g transform={`rotate(-90 ${center} ${center})`}>
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth={stroke}
                />
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={dash}
                    strokeDashoffset={0}
                />
            </g>
            <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize={14} fill="#111827">
                {Math.round(percent * 100)}%
            </text>
        </svg>
    );
}

const Donations = () => {
    // Example starting numbers. In a real app these come from an API.
    const [goal] = useState(5000); // donation goal
    const [donatedAmount, setDonatedAmount] = useState(0); // current donated

    // Form state
    const [form, setForm] = useState({ name: "", email: "", amount: "", message: "" });
        const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [success, setSuccess] = useState("");
        const [donationDates, setDonationDates] = useState([]);
        const lastDonationDate = donationDates.length
            ? new Date(Math.max(...donationDates.map((d) => new Date(d).getTime())))
            : null;

        // Load persisted donation dates on mount
            useEffect(() => {
                try {
                    const raw = localStorage.getItem("donationDates");
                    if (raw) {
                        const parsed = JSON.parse(raw);
                        if (Array.isArray(parsed)) setDonationDates(parsed);
                    }
                } catch {
                    // ignore
                }
            }, []);

        // Persist donation dates on change
            useEffect(() => {
                try {
                    localStorage.setItem("donationDates", JSON.stringify(donationDates));
                } catch {
                    // ignore
                }
            }, [donationDates]);

    useEffect(() => {
        let t;
        if (loading) {
            // simulate progress ramp
            t = setInterval(() => {
                setProgress((p) => Math.min(95, p + Math.random() * 12));
            }, 300);
        } else {
            setProgress(0);
        }
        return () => clearInterval(t);
    }, [loading]);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    }

    function validate() {
        if (!form.name.trim()) return "Please enter your name";
        if (!form.email.trim() || !form.email.includes("@")) return "Please enter a valid email";
        const amt = parseFloat(form.amount);
        if (!amt || amt <= 0) return "Please enter a donation amount > 0";
        return null;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const err = validate();
        if (err) {
            setSuccess(err);
            return;
        }

        setLoading(true);
        setSuccess("");
        // simulate network call
            setTimeout(() => {
            // finish progress
            setProgress(100);
            const add = parseFloat(form.amount);
            setDonatedAmount((d) => d + add);
                setDonationDates((ds) => [...ds, new Date()]);
            setLoading(false);
            setForm({ name: "", email: "", amount: "", message: "" });
            setSuccess("Thank you — your donation was received!");
            // reset progress visually after a short delay
            setTimeout(() => setProgress(0), 800);
        }, 1400 + Math.random() * 1200);
    }

            // Tiny util to format date + time
            const formatDate = (d) =>
            d
                    ? d.toLocaleString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                        })
                : "No donations yet";

        // Mini calendar
        function MiniCalendar({ highlightDates = [] }) {
            const [viewDate, setViewDate] = useState(() => new Date());
            const year = viewDate.getFullYear();
            const month = viewDate.getMonth();
            const firstOfMonth = new Date(year, month, 1);
            const startDay = firstOfMonth.getDay(); // 0-6 Sun-Sat
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const weeks = [];
            const cells = [];

            for (let i = 0; i < startDay; i++) cells.push(null);
            for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
            while (cells.length % 7 !== 0) cells.push(null);

            for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

            const isSameYMD = (a, b) =>
                a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

            return (
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="mb-3 flex items-center justify-between">
                        <button
                            type="button"
                            className="rounded-md border border-slate-200 px-2 py-1 text-slate-600 hover:bg-slate-50"
                            onClick={() => setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))}
                        >
                            ‹
                        </button>
                        <div className="text-sm font-semibold text-slate-800">
                            {viewDate.toLocaleDateString(undefined, { month: "long", year: "numeric" })}
                        </div>
                        <button
                            type="button"
                            className="rounded-md border border-slate-200 px-2 py-1 text-slate-600 hover:bg-slate-50"
                            onClick={() => setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))}
                        >
                            ›
                        </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-slate-500">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                            <div key={d} className="py-1">
                                {d}
                            </div>
                        ))}
                    </div>
                    <div className="mt-1 grid grid-cols-7 gap-1 text-center text-sm">
                        {weeks.flat().map((cell, idx) => {
                            const isHighlighted = highlightDates?.some((hd) => isSameYMD(new Date(hd), cell));
                            return (
                                <div
                                    key={idx}
                                    className={
                                        "h-8 rounded-md border border-slate-100 text-slate-700 flex items-center justify-center " +
                                        (cell ? "bg-white" : "bg-transparent") +
                                        (isHighlighted ? " bg-teal-500 text-white font-semibold" : "")
                                    }
                                >
                                    {cell ? cell.getDate() : ""}
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }

        return (
            <div style={{ fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial", width: '100%', margin: 0, padding: 0 }} className="px-4 sm:px-6 lg:px-8">
                {/* Heading + hero */}
                <section className="relative mb-7 rounded-2xl border border-teal-100 bg-linear-to-r from-teal-50 to-cyan-50">
                    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
                        <div className="grid items-center gap-6 md:grid-cols-2">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-3 py-1 text-teal-700 shadow-sm backdrop-blur">
                                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                                    <span className="text-xs font-medium">Every contribution counts</span>
                                </div>
                                <h1 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">Support Our Mission</h1>
                                <p className="mt-2 max-w-prose text-slate-600 sm:text-base">
                                    Your donation helps us run programs and reach more people in need. Any contribution makes a difference.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="rounded-xl ring-1 ring-teal-200/60 shadow-sm overflow-hidden">
                                    <img
                                        src={handsPalm}
                                        alt="Helping hands"
                                        className="h-44 w-full object-cover sm:h-56 md:h-64 lg:h-72"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="pointer-events-none absolute -right-2 -top-2 hidden select-none md:block">
                                    <div className="h-20 w-20 rounded-full bg-teal-200/40 blur-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Progress + numeric display + calendar */}
                <section className="mb-7">
                    <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 md:grid-cols-[180px_1fr] lg:gap-8">
                        {/* Left: Pie chart */}
                        <div className="flex items-center justify-center p-2">
                            <DonutChart donated={donatedAmount} goal={goal} size={160} stroke={16} color="#06b6d4" />
                        </div>

                        {/* Right: numbers and calendar */}
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-slate-200 bg-white p-4">
                                <div className="text-sm font-semibold text-slate-800">Total donated</div>
                                <div className="mt-1 text-2xl font-bold text-emerald-700">${donatedAmount.toLocaleString()}</div>
                                <div className="mt-1 text-sm text-slate-500">Goal: ${goal.toLocaleString()}</div>
                                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                                    <div
                                        className="h-full bg-cyan-500"
                                        style={{ width: `${Math.min(100, Math.round((donatedAmount / goal) * 100))}%` }}
                                    />
                                </div>
                                <div className="mt-2 text-xs text-slate-500">
                                    {Math.min(100, Math.round((donatedAmount / goal) * 100))}% of goal reached
                                </div>
                                <div className="mt-3 rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm text-slate-700">
                                    Last donation on: <span className="font-medium">{formatDate(lastDonationDate)}</span>
                                </div>
                            </div>

                            <MiniCalendar highlightDates={lastDonationDate ? [lastDonationDate] : []} />
                        </div>
                    </div>
                </section>

                {/* Donation form */}
                <section className="mb-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-teal-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                                        <span className="text-xs font-medium">Secure donation</span>
                                    </div>
                                    <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">Make a donation</h2>
                                    <p className="mt-1 text-sm text-slate-600">Fill in the form below to support our work.</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <input
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Full name"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                    <input
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    <input
                                        name="amount"
                                        value={form.amount}
                                        onChange={handleChange}
                                        placeholder="Amount (USD)"
                                        type="number"
                                        step="0.01"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                    <input
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Message (optional)"
                                        className="sm:col-span-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="inline-flex min-w-40 items-center justify-center rounded-lg bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                                    >
                                        {loading ? "Processing..." : "Confirm donation"}
                                    </button>

                                    {/* Loading bar */}
                                    <div className="mt-3 h-2 w-full max-w-md overflow-hidden rounded-full bg-slate-100">
                                        <div
                                            className="h-full bg-cyan-500 transition-[width] duration-200 ease-linear"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>

                                {success && (
                                    <div className={"text-sm " + (success.startsWith("Thank") ? "text-emerald-700" : "text-red-600")}>
                                        {success}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>

                <div style={{ width: '100%' }}>
                    <FooterSection />
                </div>
            </div>
    
    );
};
  

export default Donations;