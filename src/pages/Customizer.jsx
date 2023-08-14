import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  CustomButton,
  AIPicker,
  ColorPicker,
  FilePicker,
  Tab,
} from "../components";
import { useSnapshot } from "valtio";

const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab contnt depending on activeTab
  // const generateTabContent = () => {
  //   switch (activeEditorTab) {
  //     case "colorpicker":
  //       return <ColorPicker />;
  //     case "filepicker":
  //       return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
  //     case "aipicker":
  //       return (
  //         <AIPicker
  //           prompt={prompt}
  //           setPrompt={setPrompt}
  //           generatingImg={generatingImg}
  //           handleSubmit={handleSubmit}
  //         />
  //       );

  //       break;

  //     default:
  //       break;
  //   }
  // };

  // const handleSubmit=async (type)=>{
  //   if(!prompt){
  //     return alert("Please enter a prompt");
  //   }
  //   try {
  //     //call server to create ai img
  //     setGeneratingImg(true)
  //    const response= await fetch('http://localhost:8080/api/v1/dalle',{
  //     method:'POST',
  //     headers:{'Content-Type':'application/json'},
  //     body : JSON.stringify({prompt})
  //    })
  //    const data=await response.json()
  //    handleDecals(type, `data:image/png;base64,${data.photo}`);
  //   } catch (error) {
  //     alert(error)
  //   }finally{
  //     setGeneratingImg(false)
  //     setActiveEditorTab("")
  //   }
  // }

  // const handleDecals = (type, result) => {
  //   const decalType = DecalTypes[type];

  //   state[decalType.stateProperty] = result;

  //   if (!activeFilterTab[decalType.filterTab]) {
  //     handleActiveFilterTab(decalType.filterTab);
  //   }
  // };
  // const handleActiveFilterTab = (tabName) => {
  //   switch (tabName) {
  //     case "logoShirt":
  //       state.isLogoTexture = !activeFilterTab[tabName];
  //       break;
  //     case "stylishShirt":
  //       state.isFullTexture = !activeFilterTab[tabName];
  //       break;
  //     default:
  //       state.isLogoTexture = true;
  //       state.isFullTexture = false;
  //       break;
  //   }

  //   // after seting state activeFiltertab req to update uo
  //   setActiveFilterTab((prevState) => {
  //     console.log(prevState);
  //     console.log(tabName);
  //     return {
  //       ...prevState,
  //       [tabName]: !prevState[tabName],
  //     };
  //   });
  // };

  // const readFile = (type) => {
  //   reader(file).then((result) => {
  //     handleDecals(type, result);
  //     setActiveEditorTab("");
  //   });
  // };
  const downloadCanvasToImage = () => {
    const canvas = document.querySelector('canvas'); // Replace with the correct canvas selector
    const image = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = image;
    link.download = 'created_tshirt.png'; // Specify the desired file name
    link.click();
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
      key="custom"
      className={`absolute top-0 left-0 z-10 ${snap.intro ? 'hidden' : ''}`}
      {...slideAnimation('left')}
    >
      <div className="flex items-center" style={{ height: 'calc(100vh - 2rem)' }}>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSfKagIojdpKcrFWE0KCIH1vha7iJ9v2a2-1_b-BKcmAbyV1Lg/viewform?embedded=true"
    width="100%"
    height="100%"
    frameBorder="0"
    marginHeight="0"
    marginWidth="0"
    style={{ overflow: 'scroll' }}
  >
    Loading...
  </iframe>
</div>
    </motion.div>


          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyle="w-fit px-4 py-2.5 font-bold text-sm"
            />
            
          </motion.div>
          {/* <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => {
                  handleActiveFilterTab(tab.name);
                }}
              />
            ))}
             <button className='download-btn' onClick={downloadCanvasToImage}>
              <img
                src={download}
                alt='download_image'
                className='w-3/5 h-3/5 object-contain'
              />
            </button>
          </motion.div> */}
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
