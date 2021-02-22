import PierLandingLayout from "layouts/PierLandingLayout";
import data from "./data";
// import MainSection from "./sections/MainSection";
import Campaign from "./sections/Campaign";
import OurPosition from "./sections/OurPosition";
import BlogContent from "./sections/BlogContent";
import ShareIdea from "./sections/ShareIdea";

const Covid19Landing = () => {
  return (
    <PierLandingLayout
      fixedHeader
      pageTitle="Pier - Covid19"
      canonicalLink="https://www.pier.digital/covid19-saude"
    >
      {/* <MainSection title={data.mainSection.title} /> */}
      <Campaign
        title={data.campaignSection.title}
        description={data.campaignSection.description}
        cta={data.campaignSection.ctaFreeInsurance}
        shareText={data.campaignSection.share}
      />
      <OurPosition
        title={data.ourPositionSection.title}
        description={data.ourPositionSection.description}
        cta={data.ourPositionSection.ctaReadFull}
        hashtagText={data.ourPositionSection.doTheRightThing}
      />
      <BlogContent
        title={data.blogContentSection.title}
        description={data.blogContentSection.description}
        blogLinks={data.blogContentSection.blogLinks}
        igPost={data.blogContentSection.igPost}
      />
      <ShareIdea
        title={data.shareIdeaSection.title}
        description={data.shareIdeaSection.description}
        cta={data.shareIdeaSection.ctaHaveAnIdea}
      />
    </PierLandingLayout>
  );
};

export default Covid19Landing;
