import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"

import { CodingTime, DefaultView } from "../lib/CodingTime"
import ListRepositories from "../lib/ListRepositories"

const Hero = styled("div")`
  margin-bottom: 1em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    display: inline-block;
    font-weight: 700;
    margin-bottom: 1em;
    font-size: 4em;
    line-height: 1;
    background-color: rgb(244, 107, 63);
    color: white;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }

  h2 {
    font-size: 3em;
  }
`

const Section = styled("div")`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 20px;
  }

  h1 {
    display: inline-block;
    color: rgb(244, 107, 63);
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const RenderBody = ({ home, projects, meta }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Hero>
      <CodingTime render={props => <DefaultView {...props} />} />
    </Hero>
    <Section id="projects">
      <ListRepositories
        render={({
          name,
          html_url,
          thumbnail,
          description,
          created_at,
          updated_at,
          homepage,
          node_id,
        }) => (
          <ProjectCard
            key={node_id}
            description={description}
            thumbnail={thumbnail}
            title={name}
            uid={node_id}
            repo={html_url}
            website={homepage}
            updated_at={updated_at}
          />
        )}
      />
    </Section>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata

  return (
    <Layout>
      <RenderBody meta={meta} />
    </Layout>
  )
}

RenderBody.propTypes = {
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
