var moduleNav = {
  view: function() {
    return m("div.schitte-nav", [
      m("img.schitte-nav-logo"),
      m("span.schitte-nav-title"),
      m("div.schitte-nav-buttons", [
        m("button.schitte-nav-button[onclick='window.open(\"https://sites.google.com/view/schitteindustries/home\", \"_blank\")']", "Home"),
        m("button.schitte-nav-button[onclick='window.open(\"https://sites.google.com/view/schitteindustries/schitte-products\", \"_blank\")']", "Products"),
        m("button.schitte-nav-button[onclick='window.open(\"https://sites.google.com/view/schitteindustries/clash-of-cash\", \"_blank\")']", "Clash of Cash"),
        m("button.schitte-nav-button[onclick='window.open(\"https://sites.google.com/view/schitteindustries/sellout\", \"_blank\")']", "Sellout"),
        m("button.schitte-nav-button[onclick='window.open(\"https://sites.google.com/view/schitteindustries/disclaimer\", \"_blank\")']", "Disclaimer"),
      ])
    ]);
  }
}
