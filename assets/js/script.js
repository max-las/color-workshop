// Quand le DOM est prêt
document.addEventListener("DOMContentLoaded", function(){

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

function switchOeuvre(n){
  let classes = document.querySelector(".works__image").classList;

  for(var i = 0; i < classes.length; i++){
    if(classes.item(i).startsWith("works__image--oeuvre")){
      classes.remove(classes.item(i));
    }
  }

  classes.add("works__image--oeuvre" + n);

  document.querySelector(".works__imageThumbnail--selected").classList.remove("works__imageThumbnail--selected");
  document.querySelector(".works__imageThumbnail--oeuvre" + n).classList.add("works__imageThumbnail--selected");
}
