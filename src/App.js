import './assets/stylesheets/style.scss'
import ProjectList from './components/ProjectList/ProjectList'
import Description from './components/ProjectOverview/Description'
import OverviewHeader from './components/ProjectOverview/OverviewHeader/OverviewHeader'
import History from './components/ProjectOverview/ProjectHistory/History'
import ProjectComponents from './components/ProjectOverview/ProjectComponents/ProjectComponents'
import ProjectType from './components/ProjectOverview/ProjectType/ProjectType'
import ProjectTags from './components/ProjectOverview/ProjectTags/ProjectTags'
import ProjectMembers from './components/ProjectOverview/ProjectMembers/ProjectMembers' 
import { ProjectsProvider } from './ProjectsContext' 
import Logo from "./assets/images/logo.png"

export default function App(){
    
    return (
    <ProjectsProvider>
        <header>
            <img src={Logo} alt="logo" />
            <h1>ProjecTiles</h1>
            <p>
                Like a silver bullet piercing through all your management needs
            </p>
        </header>
        <div className="app">
            <ProjectList />
            <div className="project-overview">
                <OverviewHeader />
                <div className="content">
                    <div className="primary-content">
                        <Description/>
                        <History />
                        <ProjectComponents />
                    </div>
                    <div className="secondary-content">
                        <h1 className="header">
                            Project Details
                        </h1>
                        <ProjectType />
                        <ProjectTags />
                        <ProjectMembers />
                    </div>
                </div>
            </div>
        </div> 
    </ProjectsProvider>
    )
}