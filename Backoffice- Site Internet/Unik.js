//API- adresse web :
//https://rapidapi.com/apidojo/api/asos2



//Obtenir donnée du lien API
async function reecrireAppels() {
    //try {

      let blabla = await fetch("https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?count=10&gender=b&maxage=40&minage=30&cc=all&email=gmail.com%252Cyahoo.com&pwlen=12&ip=a&phone=l%252Ct%252Co&uuid=false&lic=false&color=false&seed=helloworld&images=false&format=json", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com",
          "x-rapidapi-key": "b5a32561b6msh36a70cb15ae375cp16778ejsn795ffec91187"
        }
      });

      blabla = await blabla.json();
      let tableau = blabla;
      await console.log(tableau);
    
      //} catch (e) {
      //console.log(e);
    
      //var test = document.getElementById('graph'); //selection div pour affichage donnée
    var noms = document.getElementsByClassName("names");
    var ville = document.getElementsByClassName("city");
    var tel = document.getElementsByClassName("phone");

    function remplirNoms(){
      for(var i = 0; i< noms.length; i++){
        if(i < 8){
          noms[i].innerHTML = tableau[i].firstname+" "+tableau[i].location.city;
        }
        // if(i>5){
        //   name[i].innerHTML = tableau[i].city;
        // }
      }
    }
    remplirNoms();

    function remplirVille(){
      for(var i = 0; i< ville.length; i++){
        if(i < 8){
          ville[i].innerHTML = tableau[i].location.city;
        }
      }

    }
    remplirVille();

    function remplirTel(){
      for(var i = 0; i< tel.length; i++){
        if(i < 8){
          tel[i].innerHTML = tableau[i].phone.mobile;
        }
      }

    }

    remplirTel();


  }

reecrireAppels();


//créer 3 div dans une div et leurs mettre des classes différentes (nom, ville et info)
//