const container = document.getElementById('container');
        let selectedItem = null;
        let offsetX, offsetY;

        // Function to create grid items
        function createItems() {
            let cols = 5;
            let rows = 5;
            let itemSize = 50;
            let gap = 10;
            let id = 1;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    let item = document.createElement('div');
                    item.classList.add('item');
                    item.textContent = id++;
                    item.style.left = `${c * (itemSize + gap)}px`;
                    item.style.top = `${r * (itemSize + gap)}px`;
                    container.appendChild(item);
                    
                    item.addEventListener('mousedown', (e) => {
                        selectedItem = item;
                        offsetX = e.clientX - selectedItem.offsetLeft;
                        offsetY = e.clientY - selectedItem.offsetTop;
                        selectedItem.style.cursor = 'grabbing';
                    });
                }
            }
        }

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

        // Generate items on page load
        createItems();