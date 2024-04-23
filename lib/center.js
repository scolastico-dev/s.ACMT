export function centerObj(objContent) {
  const lines = objContent.split('\n');
  let vertices = [];
  let transformedLines = [];

  // Parse the obj content and collect all vertices
  lines.forEach((line, index) => {
    if (line.startsWith('v ')) {
      const parts = line.split(/\s+/).map((val, idx) => idx === 0 ? val : parseFloat(val));
      vertices.push({ x: parts[1], y: parts[2], z: parts[3], index: index });
    }
    transformedLines.push(line);  // Keep original line format to maintain file structure
  });

  if (vertices.length === 0) {
    return objContent;  // No vertices to process
  }

  // Calculate the global bounding box
  const minX = Math.min(...vertices.map(v => v.x));
  const maxX = Math.max(...vertices.map(v => v.x));
  const minY = Math.min(...vertices.map(v => v.y));
  const maxY = Math.max(...vertices.map(v => v.y));
  const minZ = Math.min(...vertices.map(v => v.z));
  const maxZ = Math.max(...vertices.map(v => v.z));

  // Calculate the center of the bounding box
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  const centerZ = (minZ + maxZ) / 2;

  // Calculate the translation to center the bounding box at the origin
  const translationX = -centerX;
  const translationY = -centerY;
  const translationZ = -centerZ;

  // Apply the translation to all vertices
  vertices.forEach(v => {
    const transformedLine = transformedLines[v.index].split(/\s+/);
    transformedLine[1] = (v.x + translationX).toFixed(6);
    transformedLine[2] = (v.y + translationY).toFixed(6);
    transformedLine[3] = (v.z + translationZ).toFixed(6);
    transformedLines[v.index] = transformedLine.join(' ');
  });

  // Reconstruct the new obj content
  return transformedLines.join('\n');
}
