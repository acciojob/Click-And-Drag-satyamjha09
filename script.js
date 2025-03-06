const container = document.getElementById('container');
        const items = document.querySelectorAll('.item');
        let selectedItem = null;
        let offsetX, offsetY;

        items.forEach(item => {
            item.addEventListener('mousedown', (e) => {
                selectedItem = e.target;
                offsetX = e.clientX - selectedItem.offsetLeft;
                offsetY = e.clientY - selectedItem.offsetTop;
                selectedItem.style.cursor = 'grabbing';
            });
        });

        document.addEventListener('mousemove', (e) => {
            if (!selectedItem) return;
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;
            let maxX = container.offsetWidth - selectedItem.offsetWidth;
            let maxY = container.offsetHeight - selectedItem.offsetHeight;
            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));
            selectedItem.style.left = `${newX}px`;
            selectedItem.style.top = `${newY}px`;
        });

        document.addEventListener('mouseup', () => {
            if (selectedItem) {
                selectedItem.style.cursor = 'grab';
            }
            selectedItem = null;
        });