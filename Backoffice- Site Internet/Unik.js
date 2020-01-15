//API- adresse web :
//https://rapidapi.com/apidojo/api/asos2



//Obtenir donnée du lien API
async function reecrireAppels() {
    //try {

      let blabla = await fetch("https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius?radius=50&lng=-157.895277&lat=21.265600", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
            "x-rapidapi-key": "b5a32561b6msh36a70cb15ae375cp16778ejsn795ffec91187"
        }
    });

      blabla = await blabla.json();
      let tableau = blabla;
      await console.log(tableau);
    
      //} catch (e) {
      //console.log(e);
    
    var test2 = document.getElementsByClassName("graph");
    var test = document.getElementById('graph'); //selection div pour affichage donnée
    function remplir(){
      for(var i = 0; i< test2.length; i++){
        if(i < 6){
          test2[i].innerHTML = tableau[i].name;
        }
        if(i>5){
          test2[i].innerHTML = tableau[i-4].city;
        }
      }
   
      
    }

    remplir();
    console.log(test2);
    

  }

reecrireAppels();


//créer 3 div dans une div et leurs mettre des classes différentes (nom, ville et info)
//