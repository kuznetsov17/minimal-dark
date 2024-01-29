document.addEventListener("DOMContentLoaded", function(event){
    setStartTheme();
    if (document.head.dataset['BuildSearchIndex'] == true) {
      initSearch();
    }
  });