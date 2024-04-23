// Helper to process lines and manage collections of vertices
function processLine(line, marker, currentCollection, mainArray) {
  line = line.trim();  // Trim whitespace

  if (line.startsWith('#') || line === '') {
      // Ignore comments and empty lines
      return;
  } else if (line.startsWith(marker)) {
      // When a new marker is found, store the current collection and start a new one
      if (currentCollection.length > 0) {
          mainArray.push(currentCollection.join('\n'));
          currentCollection.length = 0;  // Clear the current collection
      }
  } else if (line.startsWith('v ')) {
      // Collect vertices
      currentCollection.push(line);
  }
  // Ignore all other lines like 'f' (faces), 'vt' (texture coords), etc.
}

// Finalize the collection if any vertices were collected
function finalizeCollection(currentCollection, mainArray) {
  if (currentCollection.length > 0) {
      mainArray.push(currentCollection.join('\n'));
  }
}

// Split content by group
export function splitObjByGroup(objContent) {
  const lines = objContent.split('\n');
  let groupVertices = [];
  let currentGroup = [];

  lines.forEach(line => processLine(line, 'g ', currentGroup, groupVertices));
  finalizeCollection(currentGroup, groupVertices);

  return groupVertices;
}

// Split group content by object
export function splitGroupByObject(groupContent) {
  const lines = groupContent.split('\n');
  let objectVertices = [];
  let currentObject = [];

  lines.forEach(line => processLine(line, 'o ', currentObject, objectVertices));
  finalizeCollection(currentObject, objectVertices);

  return objectVertices;
}
