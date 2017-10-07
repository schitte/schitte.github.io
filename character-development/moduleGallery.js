//@params
//config (object):
//  id(string): unique id for the group for selector id. e.g. "S1E1"
//  title(string): e.g. "Season 1 Episode 1"
//  realease(string): e.g. "Released: 2017-09-17"
//  slides(array[string]): episode title string e.g. "S1E1"
//    as well as "soon", "previously", "presents", "play", and "title"
//    end slides are automatically included, and should not be in the array.

var buildContent = function(vnode) {
  var arr = [];
  
  vnode.attrs.slides.map(function(slide) {
      if(slide === "play") {
          arr.push(m("img.schitte-gallery-overlay", {
            src: "play.png",
            id: vnode.attrs.id + "play"
//            onclick: "shiftSlide(" + vnode.attrs.id + ")"
          }));
      } else if(slide === "soon") {
          arr.push(m("img.schitte-gallery-overlay", {
              src: "soon.png"
          }));
      } else if (slide === "previously") {
          arr.push(m("img.schitte-gallery-overlay", {
              src: "previously.png",
              id: vnode.attrs.id + "previously"
//              onclick: "shiftSlide(" + vnode.attrs.id + ")"
          }));
      } else if (slide === "presents") {
          arr.push(m("img.schitte-gallery-overlay", {
              src: "presents.png",
              id: vnode.attrs.id + "presents"
//              onclick: "shiftSlide(" + vnode.attrs.id + ")"
          }));
      } else if (slide === "title") {
          arr.push(m("img.schitte-gallery-overlay", {
              src: "title.png",
              id: vnode.attrs.id + "title"
//              onclick: "shiftSlide(" + vnode.attrs.id + ")"
          }));
      } else {
          arr.push(m("img.schitte-gallery-overlay", {
              src: "episodes/" + slide + ".png",
              id: vnode.attrs.id + "main" + slide
//              onclick: "shiftSlide(" + vnode.attrs.id + ")"
          }));
      }
  });

  //end
  arr.push(m("img.schitte-gallery-img", {
    src: "end.png"
  }));
  //title
  arr.push(m("p.schitte-gallery-title", "Schitte Character Development"));

  //episode title
  arr.push(m("p", vnode.attrs.title));

  //release date
  arr.push(m("p", vnode.attrs.release));

  console.log(arr);
  return arr;
}

var moduleGallery = {
  view: function(vnode) {
      return m(
        "a.schitte-gallery-item",
        {onclick: function() {return shiftSlide(vnode.attrs.id)}},
        buildContent(vnode)
      );
  }
}
