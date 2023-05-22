// @ts-check

import { Edge } from "./edge";
import { Vertex } from "./vertex";
import { Graph } from "./graph";

/**
 * @param {Graph} graph
 * @returns {string}
 * @description
 * Converts a graph to Dot format.
 */
function convert(graph) {
  let file = "graph {\n";
  graph.mapVertices((vertex) => {
    file += `  ${vertex.identifier}\n`;
  });
  graph.mapEdges((edge) => {
    file += `  ${edge.from.identifier} -- ${edge.to.identifier}\n`;
  });
  file += "}";
  return file;
}

/**
 * @param {string} file
 * @returns {Graph}
 * @description
 * Converts a Dot file to a graph.
 */
function parse(file) {
  const graph = new Graph();

  const lines = file.split("\n");

  lines.slice(1, lines.length - 1).forEach((line) => {
    const [from, to] = line.split(" -- ");
    let from_ = graph.getVertex(from);
    let to_ = graph.getVertex(to);
    if (!from_) {
      from_ = graph.newVertex(from);
    }
    if (!to_) {
      to_ = graph.newVertex(to);
    }
    graph.newEdge(from_, to_, true);
  });

  return graph;
}
