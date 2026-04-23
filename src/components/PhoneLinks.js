import { schoolInfo } from "@/constants/schoolData";

export default function PhoneLinks() {
  return (
    <>
      {schoolInfo.phones.map((phone) => (
        <a
          key={phone}
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="font-semibold text-[var(--brand-primary)] transition hover:text-[var(--brand-accent)]"
        >
          {phone}
        </a>
      ))}
    </>
  );
}
