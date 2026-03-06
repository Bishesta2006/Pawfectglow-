import { Clock } from "lucide-react";

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Sunday", time: "10:00 AM - 5:00 PM" },
  { day: "Saturday", time: "Closed" },
];

export function OpeningHours() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-md rounded-2xl bg-card p-8 shadow-lg">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Clock size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Opening Hours
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {hours.map((item) => (
              <li
                key={item.day}
                className="flex items-center justify-between rounded-xl bg-muted px-4 py-3"
              >
                <span className="font-semibold text-foreground">
                  {item.day}
                </span>
                <span
                  className={`text-sm font-bold ${item.time === "Closed" ? "text-destructive" : "text-primary"}`}
                >
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
