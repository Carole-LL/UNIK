//API adresse web :
//https://rapidapi.com/apidojo/api/asos2

async function reecrireAppels() {
    try {
      let blabla = await fetch("https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius?radius=50&lng=-157.895277&lat=21.265600", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
            "x-rapidapi-key": "b5a32561b6msh36a70cb15ae375cp16778ejsn795ffec91187"
        }
    });
      blabla = await blabla.json();
      console.log(blabla);
    } catch (e) {
      console.log(e);
    }
}

reecrireAppels();
