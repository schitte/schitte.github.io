//@params
//config (object):
//  id(string): unique id for the group for selector id. e.g. "S1E1"
//  title(string): e.g. "Season 1 Episode 1"
//  realease(string): e.g. "Released: 2017-09-17"
//  soon(bool): coming soon locking
//  premier(bool): true for first episode. disables previous. 
//  previous(array[string]): episode title string e.g. "S1E1"
//  main(array[string]): episode title string e.g. "S1E1"
var moduleGallery(config) = {
  view: function() {
      return m("a.schitte-gallery-item", [
        function() {
            var arr = [];
            
            //main episodes
            config.main.reduceRight(function(title) {
                arr.push(m("img.schitte-gallery-overlay", {
                    src: "episodes/" + title + ".png",
                    id: config.id + "main" + title,
                    onclick: "removeEL(\'" + config.id + "main" + title + "\')"
                }));
            });
        
            //title
            arr.push(m("img.schitte-gallery-overlay", {
                src: "title.png",
                id: config.id + "title",
                onclick: "removeEL(\'" + config.id + "title" + "\')"
            }));
        
            //presents
            arr.push(m("img.schitte-gallery-overlay", {
                src: "presents.png",
                id: config.id + "presents",
                onclick: "removeEL(\'" + config.id + "presents" + "\')"
            }));
            
            if(!config.premier) {
                //previous
                config.main.reduceRight(function(title) {
                    arr.push(m("img.schitte-gallery-overlay", {
                        src: "episodes/" + title + ".png",
                        id: config.id + "main" + title,
                        onclick: "removeEL(\'" + config.id + "main" + title + "\')"
                    }));
                });
                //previously
                arr.push(m("img.schitte-gallery-overlay", {
                    src: "presents.png",
                    id: config.id + "presents",
                    onclick: "removeEL(\'" + config.id + "presents" + "\')"
                }));
            }
            
            if(config.soon) {
                //soon
                arr.push(m("img.schitte-gallery-overlay", {
                    src: "soon.png"
                }));
            }
            
            //end
            arr.push(m("img.schitte-gallery-img", {
                src: "end.png"
            }));
        
            //title
            arr.push("p.schitte-gallery-title", "Schitte Character Development");
            
            //episode title
            arr.push("p", config.title);
            
            //release date
            arr.push("p", config.release);
            
            return arr;
        }
      ]);
  },
  test: function() {
      console.log('moduleGallery test');
  }
}
