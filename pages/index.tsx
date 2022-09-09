import type {NextPage} from 'next'
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";

const Home: NextPage = () => {
    return (
        <PageWrapper title={"ZNK App"} description={"Main page"} isHomeLocation>
            <ProjectSections
                // hide
                // hover
            >
                <ProjectSections.ByuroDescription
                    // hide
                    descriptionText={"Znak is an architecture office currently based IN saint-petersburg, russia in russian znak means «sign» and signify the interplay between artistic endeavors and technical skills, which results in architecture of outstan-ding quality and value"}
                />
            </ProjectSections>
        </PageWrapper>
    )
}

export default Home
