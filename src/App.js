
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your complete project managment system."
        description="Create and manage your projects, and collaborate with your team to meet your clients needs."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title=""
        description="To access Planor PMS use the following credentials"
        login="othmanehanyf"
        password="othmane2022"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center">
        <p className={`${styles.pText} ${styles.whiteText}`}>&copy;Copyright 2022. {" "}
        <span className="bold">Othmane Hanyf</span>
        </p>
      </div>

    </>
  );
}

export default App;
