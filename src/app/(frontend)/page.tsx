import { MoustachusToAdoptPanel } from "@/components/landingPage/moustachus-to-adopt-panel";
import { WelcomePanel } from "@/components/landingPage/welcome-panel";

export default async function Page() {
  return (
    <main>
      <WelcomePanel />
      <MoustachusToAdoptPanel />
    </main>
  );
}
