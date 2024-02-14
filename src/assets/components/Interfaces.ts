export interface Node {
  id: string;
  name: string;
  val?: number;
}

export interface Link {
  source: string;
  target: string;
}

export interface IFCGraphProps {
  nodes: Node[];
  links: Link[];
}
