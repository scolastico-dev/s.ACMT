export function rotateObj(objContent, angleX, angleY, angleZ) {
  // Convert degrees to radians for rotation
  const radX = angleX * Math.PI / 180;
  const radY = angleY * Math.PI / 180;
  const radZ = angleZ * Math.PI / 180;

  const lines = objContent.split('\n');
  let transformedLines = [];

  lines.forEach(line => {
    if (line.startsWith('v ')) {
      const parts = line.split(/\s+/).map((val, idx) => idx === 0 ? val : parseFloat(val));
      let { x, y, z } = { x: parts[1], y: parts[2], z: parts[3] };

      // Apply rotation around X-axis
      let newY = y * Math.cos(radX) - z * Math.sin(radX);
      let newZ = y * Math.sin(radX) + z * Math.cos(radX);
      y = newY;
      z = newZ;

      // Apply rotation around Y-axis
      let newX = x * Math.cos(radY) + z * Math.sin(radY);
      newZ = z * Math.cos(radY) - x * Math.sin(radY);
      x = newX;
      z = newZ;

      // Apply rotation around Z-axis
      newX = x * Math.cos(radZ) - y * Math.sin(radZ);
      newY = x * Math.sin(radZ) + y * Math.cos(radZ);
      x = newX;
      y = newY;

      transformedLines.push(`v ${x.toFixed(6)} ${y.toFixed(6)} ${z.toFixed(6)}`);
    } else {
      transformedLines.push(line);
    }
  });

  // Reconstruct the new obj content
  return transformedLines.join('\n');
}
