import Nav from "@/components/Nav";
import ResumeView from "@/components/ResumeView";

export const metadata = {
  title: "Résumé — Dogbajale Muhydeen",
  description: "One-page résumé — Software / OSS / Datacom Engineer.",
};

export default function ResumePage() {
  return (
    <main>
      <Nav />
      <ResumeView />
    </main>
  );
}
