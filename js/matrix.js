    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => 1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];

        ctx.fillStyle = i % 10 === 0 ? '#FFF' : '#0F0'; // Bright head
        ctx.fillText(char, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      });

      requestAnimationFrame(drawMatrix);
    };

    drawMatrix();