import { Hero } from "@components/organisms/Hero";
import Layout from "@components/molecules/Layout";

// import { Project } from "@components/partials/Project";
import { QuoteSection } from "@components/organisms/QuoteSection";
import { ServiceHome } from "@components/organisms/ServiceHome";
import { LatestProject } from "@components/organisms/LatestProject";
import { LatestBlog } from "@components/organisms/LatestBlog";
import { Footer } from "@components/organisms/Footer";

export default function Home() {
  const description =
    "Hey Everyone! I'm Saiful Nakeusa and I’m from Indonesia.I have been working as an Web Designer and Frontend Web Developer with more than 2 years of experience and still learning and exploring.";

  return (
    <Layout titlePage="Home" metaDescription={description}>
      <Hero />
      <QuoteSection />
      <ServiceHome />
      <LatestProject />
      <LatestBlog />
      <Footer />
    </Layout>
  );
}
