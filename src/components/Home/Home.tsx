/* eslint-disable import/no-unresolved */ // ! Be careful

// REACT LIBRARIES
// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import ManualTestCreation from '../TestCreation/ManualTestCreation/ManualTestCreation';
import FileDirectory from '../FileDirectory/FileDirectory';
import Monaco from '../Monaco/Monaco';
// STYLES
import { Title } from '../../assets/stylesheets/styled-components/Global';
import './Home.scss';
import SideNavbar from '../SideNavBar/SideNavBar';
// GLOBAL STATE PROVIDER
import { FileContext } from '../../providers/FileProvider';

const Home = () => {
  // GLOBAL STATE
  // toggles open/close of filetree
  const { toggleTree }: any = useContext(FileContext);

  return (
    <div id="homeCont">
      <SideNavbar />
      <div id="homeGrid">
        {/* Pop-up notification upon export */}
        <ToastContainer
          position="top-right"
          autoClose={2100}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Title id="homeHeader">pinocchio</Title>
        <div id="testMainRow">
          <div id="testColOne">
            {/* conditional rendering of FileDirectory */}
            {toggleTree && <FileDirectory />}
            <ManualTestCreation />
          </div>
          <div id="testColTwo">
            <Monaco />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
