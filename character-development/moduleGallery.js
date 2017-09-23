//@params
//config (object):
//  id(string): unique id for the group for selector id. e.g. "S1E1"
//  title(string): e.g. "Season 1 Episode 1"
//  realease(string): e.g. "Released: 2017-09-17"
//  soon(bool): coming soon locking
//  premier(bool): true for first episode. disables previous. 
//  previous(array[string]): episode title string e.g. "S1E1"
//  main(array[string]): episode title string e.g. "S1E1"
var buildContent = function(vnode) {
  var arr = [];

  //main episodes
  vnode.attrs.main.reduceRight(function(title) {
      arr.push(m("img.schitte-gallery-overlay", {
          src: "episodes/" + title + ".png",
          id: vnode.attrs.id + "main" + title,
          onclick: "removeEL(\'" + vnode.attrs.id + "main" + title + "\')"
      }));
  });

  //title
  arr.push(m("img.schitte-gallery-overlay", {
      src: "title.png",
      id: vnode.attrs.id + "title",
      onclick: "removeEL(\'" + vnode.attrs.id + "title" + "\')"
  }));

  //presents
  arr.push(m("img.schitte-gallery-overlay", {
      src: "presents.png",
      id: vnode.attrs.id + "presents",
      onclick: "removeEL(\'" + vnode.attrs.id + "presents" + "\')"
  }));

  if(!vnode.attrs.premier) {
      //previous
      vnode.attrs.main.reduceRight(function(title) {
          arr.push(m("img.schitte-gallery-overlay", {
              src: "episodes/" + title + ".png",
              id: vnode.attrs.id + "main" + title,
              onclick: "removeEL(\'" + vnode.attrs.id + "main" + title + "\')"
          }));
      });
      //previously
      arr.push(m("img.schitte-gallery-overlay", {
          src: "presents.png",
          id: vnode.attrs.id + "presents",
          onclick: "removeEL(\'" + vnode.attrs.id + "presents" + "\')"
      }));
  }

  if(vnode.attrs.soon) {
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
  arr.push("p", vnode.attrs.title);

  //release date
  arr.push("p", vnode.attrs.release);

  console.log(arr);
  return arr;
}

var moduleGallery = {
  view: function(vnode) {
      return m("a.schitte-gallery-item", buildContent(vnode)
      );
  }
}
