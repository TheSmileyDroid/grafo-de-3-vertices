// @ts-check

import { Edge } from "./edge";
import { Vertex } from "./vertex";
import { Graph } from "./graph";

/**
 * @param {string} file
 */
function generate(file) {
  const graph = new Graph();

  const lines = file.split("\n");

  const vertices = lines[0].split(" ");
  vertices.forEach((vertex) => {
    graph.newVertex(vertex);
  });

  lines.slice(1).forEach((line) => {
    const [from, to, bidirectional] = line.split(" ");
    let from_ = graph.getVertex(from);
    let to_ = graph.getVertex(to);
    if (!from_) {
      throw new Error(`Vertex ${from} not found`);
    }
    if (!to_) {
      throw new Error(`Vertex ${to} not found`);
    }
    graph.newEdge(from_, to_, bidirectional === "true");
  });

  return graph;
}

/**
 * @param {Graph} graph
 * @returns {string}
 */
function save(graph) {
  let file = "";
  graph.mapVertices((vertex) => {
    file += `${vertex.identifier} `;
  });
  file += "\n";
  graph.mapEdges((edge) => {
    file += `${edge.from.identifier} ${edge.to.identifier} ${
      edge.bidirectional ? "true" : "false"
    }\n`;
  });
  return file;
}

export { generate, save };
