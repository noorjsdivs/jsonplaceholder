import Banner from "@/components/Banner";
import OwnData from "@/components/OwnData";
import Resources from "@/components/Resources";
import Routes from "@/components/Routes";
import Testing from "@/components/Testing";
import WhenToUse from "@/components/WhenToUse";

export default function Home() {
  return (
    <main>
      <Banner />
      <Testing />
      <WhenToUse />
      <Resources />
      <OwnData />
      <Routes />
    </main>
  );
}
