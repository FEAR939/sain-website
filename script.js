function toggleWidget(widgetClass) {
    const widget = document.querySelector(`.${widgetClass}`);
    widget.classList.toggle('open'); // Wechselt zwischen geöffnetem und geschlossenem Zustand
}
