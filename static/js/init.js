document.addEventListener("DOMContentLoaded", function(event){
    setStartTheme();
    obj = document.head.dataset
    for (const prop in obj) {
      console.log(`obj.${prop} = ${obj[prop]}`);
    }
    
    if (document.head.dataset['buildSearchIndex'] == "true") {
      initSearch();
    }
  });