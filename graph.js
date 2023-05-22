// @ts-check
import { Edge } from "./edge";
import { Vertex } from "./vertex";

class Graph {
  /**
   * @type {Vertex[]}
   * @private
   */
  vertices = [];

  /**
   * @type {Edge[]}
   * @private
   */
  edges = [];

  constructor() {}

  /**
   * @param {string} identifier
   */
  newVertex(identifier) {
    const vertex = new Vertex(identifier);
    this.vertices.push(vertex);
    return vertex;
  }

  /**
   * @param {Vertex} from
   * @param {Vertex} to
   */
  newEdge(from, to, bidirectional = true) {
    const edge = new Edge(from, to, bidirectional);
    this.edges.push(edge);
    return edge;
  }

  /**
   * @param {string} identifier
   */
  getVertex(identifier) {
    return this.vertices.find((vertex) => vertex.identifier === identifier);
  }

  /**
   * @param {Vertex} from
   * @param {Vertex} to
   */
  getEdge(from, to) {
    return this.edges.find((edge) => edge.from === from && edge.to === to);
  }

  /**
   * @param {(value: Vertex, index: number, array: Vertex[]) => any} callback
   */
  mapVertices(callback) {
    return this.vertices.map(callback);
  }

  /**
   * @param {(value: Edge, index: number, array: Edge[]) => any} callback
   */
  mapEdges(callback) {
    return this.edges.map(callback);
  }
}

export { Graph };
