import { partners } from "@/lib/constants";
import { ContactUs, Footer, Header, MissionVission, MoreThanASport, Partner, ReachingLives, WhoWeAre } from "./components";


const Home = () => {
  return (
    <div>
      <Header />
      <ReachingLives />
      <WhoWeAre />
      <MissionVission />
      <MoreThanASport />
      <section>
        {partners.map(partner => {
          return <Partner key={partner.externalLink} partner={partner} />
        })}
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
}


export default Home;
