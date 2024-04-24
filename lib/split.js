class ObjFile {
  constructor(content) {
    const lines = content.split('\n');
    this.vertices = lines.filter(line => line.startsWith('v '));
    this.faces = lines.filter(line => line.startsWith('f '));
    this.vertexMap = this.vertices.reduce((acc, v, index) => {
      acc[v] = index;
      return acc;
    }, {});
    this.faceMap = this.faces.reduce((acc, face, index) => {
      const vertices = face.split(/\s+/).slice(1).map(v => parseInt(v.split('/')[0]) - 1);
      vertices.forEach(vertexIndex => {
        if (!acc[vertexIndex]) acc[vertexIndex] = [];
        acc[vertexIndex].push(index);
      });
      return acc;
    }, {});
  }

  getFacesForVertex(vertex) {
    const vertexIndex = this.vertexMap[vertex];
    if (!this.faceMap[vertexIndex]) return [];
    return this.faceMap[vertexIndex].map(faceIndex => this.faces[faceIndex]);
  }

  getVerticesForFace(face) {
    const vertexIndices = face.split(/\s+/).slice(1).map(v => parseInt(v.split('/')[0]) - 1);
    return vertexIndices.map(index => this.vertices[index]);
  }

  processVerticesAndFaces(vertices) {
    let faces = [];
    let relatedVertices = new Set(vertices);

    vertices.forEach(vertex => {
      const relatedFaces = this.getFacesForVertex(vertex);
      relatedFaces.forEach(face => {
        faces.push(face);
        this.getVerticesForFace(face).forEach(v => relatedVertices.add(v));
      });
    });

    // Create vertex remapping and remap the faces
    const vertexList = Array.from(relatedVertices);
    const indexMap = vertexList.reduce((acc, vertex, index) => {
      acc[this.vertexMap[vertex]] = index + 1; // OBJ indices are 1-based
      return acc;
    }, {});

    const remappedFaces = faces.map(face => {
      const parts = face.split(/\s+/);
      const remappedVertices = parts.slice(1).map(v => ` ${indexMap[parseInt(v.split('/')[0]) - 1]}`).join('');
      return `f${remappedVertices}`;
    });

    return {
      vertices: vertexList.sort((a, b) => this.vertexMap[a] - this.vertexMap[b]),
      faces: Array.from(new Set(remappedFaces))
    };
  }
}

function finalizeCollection(currentCollection, mainArray) {
  if (currentCollection.length > 0) {
    mainArray.push(currentCollection.join('\n'));
  }
}

function processLine(line, marker, currentCollection, mainArray) {
  line = line.trim();
  if (line.startsWith('#') || line === '') return;
  if (line.startsWith(marker)) {
    if (currentCollection.length > 0) {
      mainArray.push(currentCollection.join('\n'));
      currentCollection.length = 0;
    }
  } else {
    currentCollection.push(line);
  }
}

function splitContent(obj, lines, marker) {
  let groupedData = [];
  let currentCollection = [];

  lines.forEach(line => processLine(line, marker, currentCollection, groupedData));
  finalizeCollection(currentCollection, groupedData);

  return groupedData.map(data => {
    const dataLines = data.split('\n');
    const vertices = dataLines.filter(line => line.startsWith('v '));
    const processedData = obj.processVerticesAndFaces(vertices);
    return processedData.vertices.concat(processedData.faces).join('\n');
  });
}

export function splitObjByGroup(objContent) {
  const obj = new ObjFile(objContent);
  return splitContent(obj, objContent.split('\n'), 'g ');
}

export function splitGroupByObject(groupContent) {
  const obj = new ObjFile(groupContent);
  return splitContent(obj, groupContent.split('\n'), 'o ');
}

export function splitByConnectedFaces(objContent) {
  const obj = new ObjFile(objContent);
  const visited = new Array(obj.faces.length).fill(false);
  const clusters = [];

  // Helper function to perform BFS and collect connected faces and vertices
  function bfs(startIndex) {
    const queue = [startIndex];
    const clusterFaces = [];
    const clusterVertices = new Set();

    while (queue.length > 0) {
      const currentIndex = queue.shift();
      if (visited[currentIndex]) continue;
      visited[currentIndex] = true;

      const currentFace = obj.faces[currentIndex];
      const vertices = obj.getVerticesForFace(currentFace);
      vertices.forEach(vertex => {
        clusterVertices.add(vertex);
        const connectedFaces = obj.getFacesForVertex(vertex);
        connectedFaces.forEach(face => {
          const faceIndex = obj.faces.indexOf(face);
          if (!visited[faceIndex]) {
            queue.push(faceIndex);
          }
        });
      });
      clusterFaces.push(currentFace);
    }

    // Create mapping from old vertex indices to new indices
    const vertexList = Array.from(clusterVertices);
    const indexMap = vertexList.reduce((acc, vertex, index) => {
      acc[obj.vertexMap[vertex]] = index + 1; // OBJ indices are 1-based
      return acc;
    }, {});

    // Remap face indices using the new vertex index map
    const remappedFaces = clusterFaces.map(face => {
      const parts = face.split(/\s+/);
      const remappedVertices = parts.slice(1).map(v => {
        const vertexIndex = parseInt(v.split('/')[0]) - 1;
        return ` ${indexMap[vertexIndex]}`;
      }).join(' ');
      return `f${remappedVertices}`;
    });

    return {
      vertices: vertexList,
      faces: remappedFaces
    };
  }

  // Collect all clusters
  for (let i = 0; i < obj.faces.length; i++) {
    if (!visited[i]) {
      const cluster = bfs(i);
      clusters.push(cluster);
    }
  }

  // Format clusters as obj content
  return clusters.map(cluster => {
    return cluster.vertices.concat(cluster.faces).join('\n');
  });
}
