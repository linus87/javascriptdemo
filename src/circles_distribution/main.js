function placeCircles(containerId, circleSizes) {
    const container = document.getElementById(containerId);
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const placedCircles = []; // Keep track of placed circles
  
    // Function to check if a new circle overlaps with any existing circle
    function isOverlapping(newCircle) {
      for (const circle of placedCircles) {
        const dx = circle.x - newCircle.x;
        const dy = circle.y - newCircle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < circle.radius + newCircle.radius) {
          return true; // Overlap detected
        }
      }
      return false;
    }
  
    // Function to place a circle within the container
    function placeCircle(radius) {
      let maxAttempts = 1000; // Limit the number of placement attempts
      let newCircle;
      do {
        // Random position for the new circle
        const x = Math.random() * (containerWidth - 2 * radius) + radius;
        const y = Math.random() * (containerHeight - 2 * radius) + radius;
        newCircle = { x, y, radius };
  
        // If we can't find a spot, reduce the number of attempts
        maxAttempts--;
        if (maxAttempts <= 0) {
          throw new Error('Failed to place all circles without overlap.');
        }
      } while (isOverlapping(newCircle));
  
      // No overlap, add the new circle to the list of placed circles
      placedCircles.push(newCircle);
  
      // Create the circle element and add it to the container
      const circleElement = document.createElement('div');
      circleElement.style.position = 'absolute';
      circleElement.style.left = `${newCircle.x - radius}px`;
      circleElement.style.top = `${newCircle.y - radius}px`;
      circleElement.style.width = `${radius * 2}px`;
      circleElement.style.height = `${radius * 2}px`;
      circleElement.style.borderRadius = '50%';
      circleElement.style.backgroundColor = 'blue'; // Change as needed
  
      container.appendChild(circleElement);
    }
  
    // Try to place each circle
    for (const radius of circleSizes) {
      placeCircle(radius);
    }
  }
  
  // Example usage:
  placeCircles('container', [50, 40, 30, 20, 10]);