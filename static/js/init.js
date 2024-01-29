document.addEventListener("DOMContentLoaded", function(event){
    setStartTheme();
    if (document.head.dataset['build_search_index'] == true) {
      initSearch();
    }
  });