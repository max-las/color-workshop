// Quand le DOM est prêt
document.addEventListener("DOMContentLoaded", function(){

  // l'affichage des descriptions doit être géré par js plutôt que css pour permettre à leurs transtions de bien se dérouler
  document.querySelector(".works__description--selected").style.display = "block";
  document.querySelector(".works__description--selected").style.opacity = "1";

  document.querySelector(".imageArrows__left").addEventListener("click", function(){
    var oeuvre = whichOeuvre();

    if(oeuvre == "1"){
      switchOeuvre("3");
    } else if(oeuvre == "2") {
      switchOeuvre("1");
    } else if(oeuvre == "3") {
      switchOeuvre("2");
    }

  });

  document.querySelector(".imageArrows__right").addEventListener("click", function(){
    var oeuvre = whichOeuvre();

    if(oeuvre == "1"){
      switchOeuvre("2");
    } else if(oeuvre == "2") {
      switchOeuvre("3");
    } else if(oeuvre == "3") {
      switchOeuvre("1");
    }

  });

  document.querySelector(".works__imageThumbnail--oeuvre1").addEventListener("click", function(){
    switchOeuvre("1");
  });

  document.querySelector(".works__imageThumbnail--oeuvre2").addEventListener("click", function(){
    switchOeuvre("2");
  });

  document.querySelector(".works__imageThumbnail--oeuvre3").addEventListener("click", function(){
    switchOeuvre("3");
  });

});

function whichOeuvre(){
  let classes = document.querySelector(".works__image").classList;

  for(var i = 0; i < classes.length; i++){
    if(classes.item(i) == "works__image--oeuvre1"){
      return "1";
    }
    if(classes.item(i) == "works__image--oeuvre2"){
      return "2";
    }
    if(classes.item(i) == "works__image--oeuvre3"){
      return "3";
    }
  }
}

oeuvreSwitching = false;

function switchOeuvre(n){
  if(!oeuvreSwitching){ // empêche une nouvelle transition de démarrer tant que la précédente n'est pas terminée pour éviter des bugs

    oeuvreSwitching = true;

    let classes = document.querySelector(".works__image").classList;

    for(var i = 0; i < classes.length; i++){
      if(classes.item(i).startsWith("works__image--oeuvre")){
        classes.remove(classes.item(i));
      }
    }

    classes.add("works__image--oeuvre" + n);

    document.querySelector(".works__imageThumbnail--selected").classList.remove("works__imageThumbnail--selected");
    document.querySelector(".works__imageThumbnail--oeuvre" + n).classList.add("works__imageThumbnail--selected");

    switchDescription(n);

  }
}

function switchDescription(n){
  let prev = document.querySelector(".works__description--selected");
  let next = document.querySelector(".works__description--oeuvre" + n);

  prev.style.opacity = null;

  // attends la fin de la transition d'opacité avant de remplacer la description précédente par la suivante
  setTimeout(function(){
    prev.style.display = null;
    prev.classList.remove("works__description--selected");
    next.classList.add("works__description--selected");
    next.style.display = "block";

    // laisse le temps à la div d'apparaître avant de déclencher la transition d'opacité, sans quoi la transition n'est pas visible
    setTimeout(function(){
      next.style.opacity = "1";
      oeuvreSwitching = false;
    }, 100);

  }, 400);
}
