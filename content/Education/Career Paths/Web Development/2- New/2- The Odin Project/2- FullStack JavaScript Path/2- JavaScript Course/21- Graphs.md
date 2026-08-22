### **Core Graph Vocabulary and Concepts**

A **graph** is a collection of data points called **vertices** (or nodes) that are connected to one another by lines called **edges**. This structure is incredibly versatile and can model everything from social networks to dependency trees and road maps.

#### **Relationships And Directions**

- **Undirected Graphs:** In these graphs, relationships are symmetric and go both ways (like a Facebook friendship where both parties must agree to know each other). An edge between vertex \(u\) and vertex \(v\) is denoted as \((u, v)\) and is identical to \((v, u)\).
- **Directed Graphs:** In these graphs, connections are one-way (like a Twitter follow or a one-way street), represented visually by arrows. A directed edge leaves a starting vertex \(u\) and enters a target vertex \(v\), denoted as \((u, v)\) where the order of the vertices strictly matters.
- **Weighted Graphs:** These are graphs that put numerical values (called **weights**) on the edges. These weights can represent distances on a road map, travel times, or connection strengths.

#### **Connectivity Terms**

- **Adjacent (Neighbors):** Two vertices are adjacent if they are directly connected by an edge.
- **Incident:** An edge is said to be incident on the two vertices that it directly connects.
- **Degree:** The number of edges incident on a particular vertex.
    - _For directed graphs:_ This is split into **in-degree** (the number of incoming edges entering a vertex) and **out-degree** (the number of outgoing edges leaving a vertex).
- **Path:** A sequence of connected edges that allows you to travel from one vertex to another.
- **Shortest Path:** In an unweighted graph, the path between two vertices with the fewest edges. In a weighted graph, the path between two vertices that has the lowest total sum of edge weights.
- **Cycle:** A path that starts at a specific vertex and eventually travels back to that same vertex.
- **Directed Acyclic Graph (DAG):** A directed graph that contains absolutely no cycles.

---

### **Visualizing Graph Representations**

To understand how a computer stores these structures, let's visualize a simple undirected graph containing **3 vertices (0, 1, and 2)** and **2 edges**:

```
  (0) ------- (1) ------- (2)
```

In asymptotic analysis, we use **\(V\)** to represent the total number of vertices and **\(E\)** to represent the total number of edges. We evaluate each representation using three criteria: **Memory (Space)**, **Edge Lookup Time** (checking if a connection exists between \(i\) and \(j\)), and **Neighbor Lookup Time** (finding all vertices connected to \(i\)).

---

#### **1. The Edge List**

An Edge List is a flat collection containing all the edges in the graph. Each edge is stored as a small group of the two vertex numbers it connects (and optionally a weight).

```
[
  [Vertex 0, Vertex 1],
  [Vertex 1, Vertex 2]
]
```

- **Memory Space (\(\Theta(E)\)):** Highly efficient. We only store the edges that actually exist, wasting zero memory.
- **Edge Lookup Time (\(O(E)\)):** Slow. Because the edges are in no specific order, we must perform a linear search from top to bottom through all edges in the worst case.
- **Neighbor Lookup Time (\(O(E)\)):** Slow. We must search the entire list of edges to find all connections containing our target vertex.

---

#### **2. The Adjacency Matrix**

An Adjacency Matrix is a 2D grid of size \(V \times V\). The rows represent the starting vertices, and the columns represent the destination vertices. A `1` (or weight value) in a grid cell indicates a connection, while a `0` (or `null`) indicates no connection.

```
              COLUMNS (To Vertex)
               0    1    2
            +----+----+----+
     Row 0  | 0  | 1  | 0  |  <-- Vertex 0 connects only to Vertex 1
ROWS Row 1  | 1  | 0  | 1  |  <-- Vertex 1 connects to Vertex 0 and Vertex 2
     Row 2  | 0  | 1  | 0  |  <-- Vertex 2 connects only to Vertex 1
            +----+----+----+
```

- **Memory Space (\(\Theta(V^2)\)):** Inefficient for **sparse** graphs (graphs with few edges). You must allocate a massive grid size regardless of how few connections exist, filling the memory with empty zeros.
- **Edge Lookup Time (\(\Theta(1)\)):** Instantaneous. Since we know the exact row and column coordinates, we can look up any connection in constant time.
- **Neighbor Lookup Time (\(\Theta(V)\)):** Slow. To find a vertex's neighbors, we must inspect every single cell along its row, even if it only has one neighbor.
- **Symmetry:** For undirected graphs, the matrix is always symmetric across its main diagonal. For directed graphs, it does not need to be symmetric.

---

#### **3. The Adjacency List**

An Adjacency List combines the previous two methods. It consists of an outer master list of size \(V\) (one slot for each vertex). Each slot points to an individual list containing only the vertices it is directly connected to.

```
Vertex 0 ---> [ 1 ]
Vertex 1 ---> [ 0, 2 ]
Vertex 2 ---> [ 1 ]
```

- **Memory Space (\(\Theta(V + E)\)):** Excellent balance. For undirected graphs, the individual lists contain a combined total of \(2E\) items (since each edge appears twice). For directed graphs, they contain exactly \(E\) items.
- **Edge Lookup Time (\(\Theta(d)\)):** Moderate. To check if an edge exists from vertex \(i\) to \(j\), we jump to \(i\)'s list in constant time, but must then search through its neighbors. This takes time proportional to the **degree (\(d\))** of vertex \(i\).
- **Neighbor Lookup Time (\(\Theta(1)\)):** Fast. We can jump directly to the target vertex's spot in the master array and instantly read its complete list of neighbors.

---

### **The Trade-Off Comparison Matrix**

| Representation       | Memory (Space)          | Edge Lookup Time    | Neighbor Lookup Time | Best Used For                                                             |
| :------------------- | :---------------------- | :------------------ | :------------------- | :------------------------------------------------------------------------ |
| **Edge List**        | **$\(\Theta(E)\)$**     | **\(O(E)\)**        | **\(O(E)\)**         | Extreme memory savings or simple edge-focused algorithms.                 |
| **Adjacency Matrix** | **$\(\Theta(V^2)\)$**   | **$\(\Theta(1)\)$** | **$\(\Theta(V)\)$**  | Dense graphs with many connections, or when edge lookups must be instant. |
| **Adjacency List**   | **$\(\Theta(V + E)\)$** | **$\(\Theta(d)\)$** | **$\(\Theta(1)\)$**  | Sparse graphs, or algorithms requiring frequent neighbor lookups.         |

---

**Previous:** [[20- Hash Table]]