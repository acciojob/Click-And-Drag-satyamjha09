document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    let activeItem = null;
    let offsetX = 0, offsetY = 0;

    items.forEach(item => {
        item.addEventListener("mousedown", (e) => {
            activeItem = item;
            offsetX = e.clientX - item.getBoundingClientRect().left;
            offsetY = e.clientY - item.getBoundingClientRect().top;

            item.style.position = "absolute";
            item.style.zIndex = 1000; // Bring to front
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });
    });

    function onMouseMove(e) {
        if (!activeItem) return;

        const container = document.querySelector(".items");
        const rect = container.getBoundingClientRect();
        
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        // Boundary constraints
        x = Math.max(rect.left, Math.min(x, rect.right - activeItem.offsetWidth));
        y = Math.max(rect.top, Math.min(y, rect.bottom - activeItem.offsetHeight));

        activeItem.style.left = `${x}px`;
        activeItem.style.top = `${y}px`;
    }

    function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        activeItem = null;
    }
});
