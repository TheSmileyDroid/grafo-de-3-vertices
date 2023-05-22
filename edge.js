// @ts-check

import { Vertex } from "./vertex";

class Edge {
  /**
   * @type {Vertex}
   */
  from;

  /**
   * @type {Vertex}
   */
  to;

  /**
   * @type {boolean}
   * @default false
   * @description
   * If true, this edge is bidirectional.
   */
  bidirectional = true;

  /**
   * @param {Vertex} from
   * @param {Vertex} to
   * @param {boolean} bidirectional
   */
  constructor(from, to, bidirectional = true) {
    this.from = from;
    from.connectEdge(this);
    this.to = to;
    to.connectEdge(this);
    this.bidirectional = bidirectional;
  }
}

export { Edge };
