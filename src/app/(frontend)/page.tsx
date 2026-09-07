import { AssociationOverviewPanel } from "@/components/landingPage/association-overview-panel";
import { MoustachusToAdoptPanel } from "@/components/landingPage/moustachus-to-adopt-panel";
import { PartnersPanel } from "@/components/landingPage/partners-panel";
import { WelcomePanel } from "@/components/landingPage/welcome-panel";

export default async function Page() {
  return (
    <main>
      <WelcomePanel />
      <MoustachusToAdoptPanel />
      <AssociationOverviewPanel />
      <PartnersPanel />
    </main>
  );
}
