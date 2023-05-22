// @ts-check

import { Edge } from "./edge";

class Vertex {
  /**
   * @type {string}
   */
  identifier;

  /**
   * @type {Edge[]}
   */
  edges = [];

  /**
   * @param {string} identifier
   */
  constructor(identifier) {
    this.identifier = identifier;
  }

  /**
   * @param {Edge} edge
   */
  connectEdge(edge) {
    this.edges.push(edge);
  }
}

export { Vertex };
