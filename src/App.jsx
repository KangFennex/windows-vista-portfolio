import './App.scss';
import Desktop from './components/desktop/Desktop';
import Taskbar from './components/taskbar/Taskbar';
import { useAppLogic } from './hooks/AppLogic';

function App() {
  const {
    displayMsn,
    displayTech,
    displayDocuments,
    displayProjects,
    displayAbout,
    displayFeatures,
    openedFolders,
    openedPdfs,
    activeTab,
    folderPositions,
    handleDisplayPdf,
    handleActiveTab,
    handleCloseTab,
    handleDisplayApp,
    setActiveTab,
  } = useAppLogic();

  return (
    <>
      <div className="App">
        <Desktop
          handleDisplayApp={handleDisplayApp}
          displayMsn={displayMsn}
          displayTech={displayTech}
          displayDocuments={displayDocuments}
          displayProjects={displayProjects}
          folderPositions={folderPositions}
          openedFolders={openedFolders}
          displayAbout={displayAbout}
          displayFeatures={displayFeatures}
          handleDisplayPdf={handleDisplayPdf}
          handleCloseTab={handleCloseTab}
          openedPdfs={openedPdfs}
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          handleActiveTab={handleActiveTab}
        />
        <Taskbar
          handleDisplayApp={handleDisplayApp}
          openedFolders={openedFolders} 
        />
      </div>
    </>
  );
}

export default App;