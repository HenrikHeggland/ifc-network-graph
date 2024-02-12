import React, { useEffect, useState } from "react";
import { ForceGraph2D } from "react-force-graph";

interface Node {
  id: string;
  name: string;
  val?: number;
}

interface Link {
  source: string;
  target: string;
}

interface IFCGraphProps {
  nodes: Node[];
  links: Link[];
}

const IFCGraph: React.FC<IFCGraphProps> = ({ nodes, links }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ForceGraph2D
      graphData={{ nodes, links }}
      width={dimensions.width}
      height={dimensions.height}
      nodeAutoColorBy="group"
      nodeLabel="name"
      linkDirectionalArrowLength={3.5}
      linkDirectionalArrowRelPos={1}
      linkCurvature={0.25}
    />
  );
};

export default IFCGraph;
