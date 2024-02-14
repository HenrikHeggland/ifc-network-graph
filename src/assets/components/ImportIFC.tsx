import "./App.css";
import { ChangeEvent, useState } from "react";
import * as OBC from "openbim-components";

const ImportIFC = () => {
  const viewer = new OBC.Components();

  const sceneComponent = new OBC.SimpleScene(viewer);
  sceneComponent.setup();
  viewer.scene = sceneComponent;
  const scene = sceneComponent.get();
  scene.background = null;

  const viewerContainer = document.getElementById(
    "viewer-container"
  ) as HTMLDivElement;
  const rendererComponent = new OBC.SimpleRenderer(viewer, viewerContainer);
  viewer.renderer = rendererComponent;

  const cameraComponent = new OBC.OrthoPerspectiveCamera(viewer);
  viewer.camera = cameraComponent;

  viewer.init();
  cameraComponent.updateAspect();

  const ifcLoader = new OBC.FragmentIfcLoader(viewer);
  ifcLoader.settings.wasm = {
    path: "https://unpkg.com/web-ifc@0.0.43/",
    absolute: true,
  };

  const toolbar = new OBC.Toolbar(viewer);
  toolbar.addChild(ifcLoader.uiElement.get("main"));
  viewer.ui.addToolbar(toolbar);

  // Function to handle file upload and parse the IFC
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target?.result;
      try {
        // Parse the IFC content
        ifcLoader.onIfcLoaded.add(async (model) => {
          console.log(model);
        });
        // Assuming the IFC model is now loaded, you can start extracting data

        // Example: Extract nodes and links from the IFC model
        // This part will require understanding of the IFC model structure and web-ifc API
        // const extractedNodes = []; // Fill with actual data extraction logic
        // const extractedLinks = []; // Fill with actual data extraction logic

        // setNodes(extractedNodes);
        // setLinks(extractedLinks);
      } catch (error) {
        console.error("Error loading IFC:", error);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <>
      <input type="file" onChange={handleFileUpload} accept=".ifc" />
    </>
  );
};

export default ImportIFC;
