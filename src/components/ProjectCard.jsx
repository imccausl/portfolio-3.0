import React from "react"
import Button from "components/_ui/Button"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"
import moment from "moment"

const ProjectCardContainer = styled("div")`
  display: grid;
  grid-template-columns: minmax(250px, 1fr) 2fr;
  grid-gap: 120px;
  margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;

  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
    grid-gap: 0;
  }
`

const ProjectCardContent = styled("div")`
  background: white;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 1;
  }
`

const ProjectCardCategory = styled("h6")`
  font-weight: 600;
  color: ${colors.grey600};
`

const ProjectCardTitle = styled("h3")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`

const ProjectCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2.5em;
  }
`

const CardActionContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const ProjectCardImageContainer = styled("div")`
  background: ${colors.grey200};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  border: 2px solid #f4f4f4;
  padding: 10px;
  min-height: 400px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 3em;
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 250px;
  }
`

const ProjectCard = ({
  title,
  description,
  thumbnail,
  updated_at,
  repo,
  website,
}) => (
  <ProjectCardContainer>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardCategory>
        {moment(updated_at).format("DD MMMM YYYY")}
      </ProjectCardCategory>
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectCardBlurb>{description}</ProjectCardBlurb>
      <CardActionContainer>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px", marginBottom: "10px" }}
        >
          <Button className="Button--secondary">Github</Button>
        </a>

        <a href={website} target="_blank" rel="noopener noreferrer">
          <Button className="Button--secondary" disabled={!website}>
            Demo
          </Button>
        </a>
      </CardActionContainer>
    </ProjectCardContent>
    <ProjectCardImageContainer
      className="ProjectCardImageContainer"
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></ProjectCardImageContainer>
  </ProjectCardContainer>
)

export default ProjectCard

ProjectCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
