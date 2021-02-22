import * as React from "react";
import styled from "styled-components";
import Grid from "ui/Grid";
import GridItem from "ui/GridItem";
import Section from "../../sharedSections/Section";
import ExternalLink from "ui/ExternalLink";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";

const DO_RIGHT_THING_IG_POST =
  "/static_assets/images/do-right-thing-ig-post.png";

interface BlogContentPropTypes {
  title: string;
  description: string;
  blogLinks: { title: string; url: string }[];
  igPost: string;
}

const BlogLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledGridItem = styled.div`
  justify-self: center;
  align-self: center;
  grid-column-end: span 2;
  ${breakpoints.tablet} {
    grid-column-end: span 4;
  }
  ${breakpoints.desktop} {
    grid-column-end: span 5;
  }
`;

const InstagramPost = styled.img`
  margin-top: 64px;
  width: 155px;
  height: 330px;
  ${breakpoints.desktop} {
    margin-top: 0px;
    width: 250px;
    height: 533px;
  }
  ${breakpoints.tablet} {
    margin-top: 0px;
  }
`;

const BlogContent: React.FC<BlogContentPropTypes> = ({
  title,
  description,
  blogLinks,
  igPost,
}) => (
  <Section>
    <Grid>
      <GridItem m={2} t={4} d={7}>
        <Text variant="section" mb={24}>
          {title}
        </Text>
        <Text variant="bodyLarge" mb={32}>
          {description}
        </Text>
        <BlogLinksContainer>
          {blogLinks.map((link) => (
            <ExternalLink href={link.url} mb={16}>
              <Text variant="linkLarge">{link.title}</Text>
            </ExternalLink>
          ))}
        </BlogLinksContainer>
      </GridItem>
      <StyledGridItem>
        <ExternalLink href={igPost}>
          <InstagramPost
            src={DO_RIGHT_THING_IG_POST}
            alt="Postagem do instagram"
          />
        </ExternalLink>
      </StyledGridItem>
    </Grid>
  </Section>
);

export default BlogContent;
