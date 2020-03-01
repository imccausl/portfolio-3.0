import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import { FaGithub } from "react-icons/fa"
import { MdSlideshow } from "react-icons/md"
import PropTypes from "prop-types"
import moment from "moment"
import Button from "components/_ui/Button"
import ReadMoreButton from "components/_ui/ReadMoreButton"

const ProjectCardContainer = styled("div")`
  display: grid;
  grid-template-columns: minmax(250px, 1fr) 1fr;
  grid-gap: 30px;
  margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  padding: 40px;
  border-radius: 0.75em;

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
    box-shadow: none;
    padding: 0;
  }
`

const ProjectCardContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background: white;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 1;
    margin-bottom: 20px;
  }
`

const ProjectCardCategory = styled("h6")`
  font-weight: 600;
  color: ${colors.grey600};
  margin-bottom: 20px;
`

const ProjectCardTitle = styled("h3")`
  font-weight: 600;
  font-size: 1.7em;
  margin-bottom: 0;
  margin-top: 0;
`

const ProjectCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  flex-grow: 1;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2.5em;
  }
`

const CardActionContainer = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;

  a {
    width: 100%;
  }

  a:first-of-type {
    margin-right: 10px;
  }
`

const ProjectCardImage = styled("div")`
  max-height: 200px;
  min-height: 250px;
  width: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 3em;
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 250px;
  }
`

const ProjectCardImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
`

const ProjectPreview = styled("div")`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`

const ActionButtons = props => {
  const { repo, website } = props

  return (
    <CardActionContainer>
      <a href={repo} target="_blank" rel="noopener noreferrer">
        <Button className="Button--secondary">
          <FaGithub style={{ fontSize: "1.1em" }} />
          <div style={{ marginLeft: "5px", marginBottom: "1px" }}>Github</div>
        </Button>
      </a>

      <a href={website} target="_blank" rel="noopener noreferrer">
        <Button className="Button--secondary" disabled={!website}>
          <MdSlideshow style={{ fontSize: "1.2em" }} />
          <div style={{ marginLeft: "5px", marginBottom: "2px" }}>Demo</div>
        </Button>
      </a>
    </CardActionContainer>
  )
}

const ProjectCard = ({
  title,
  description,
  repoName,
  thumbnail,
  updated_at,
  repo,
  website,
  hideReadMoreButton,
  hideActionButtons,
}) => {
  return (
    <>
      <ProjectCardContainer>
        <ProjectCardContent className="ProjectCardContent">
          <div>
            <ProjectCardCategory>
              {moment(updated_at).format("DD MMMM YYYY")}
            </ProjectCardCategory>
            <ProjectCardTitle>{title}</ProjectCardTitle>
          </div>
          <ProjectCardBlurb>{description}</ProjectCardBlurb>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {!hideReadMoreButton && (
              <ReadMoreButton
                title={title}
                repoName={repoName}
                description={description}
                thumbnail={thumbnail}
                updated_at={updated_at}
                repo={repo}
                website={website}
              />
            )}
          </div>
        </ProjectCardContent>
        <ProjectPreview className="project-card-preview">
          <ProjectCardImageContainer>
            <ProjectCardImage
              style={{
                backgroundImage: `url(${thumbnail})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></ProjectCardImage>
          </ProjectCardImageContainer>
          {!hideActionButtons && (
            <ActionButtons repo={repo} website={website} />
          )}
        </ProjectPreview>
      </ProjectCardContainer>
    </>
  )
}

ProjectCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProjectCard
export { ActionButtons }
