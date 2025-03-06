const container = document.getElementById('container');
        const cubes = document.querySelectorAll('.cube');
        let selectedCube = null;
        let offsetX, offsetY;

        cubes.forEach(cube => {
            cube.addEventListener('mousedown', (e) => {
                selectedCube = e.target;
                offsetX = e.clientX - selectedCube.offsetLeft;
                offsetY = e.clientY - selectedCube.offsetTop;
                selectedCube.style.cursor = 'grabbing';
            });
        });

        document.addEventListener('mousemove', (e) => {
            if (!selectedCube) return;
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;
            let maxX = container.offsetWidth - selectedCube.offsetWidth;
            let maxY = container.offsetHeight - selectedCube.offsetHeight;
            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));
            selectedCube.style.left = `${newX}px`;
            selectedCube.style.top = `${newY}px`;
        });

        document.addEventListener('mouseup', () => {
            if (selectedCube) {
                selectedCube.style.cursor = 'grab';
            }
            selectedCube = null;
        });
