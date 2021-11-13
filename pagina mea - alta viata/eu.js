function myFunction()
{
document.getElementById("uaua").src = "uaua_altaviata.jpeg";
document.getElementById("job").innerHTML = "Dr. Inginer Ticle Cristina";


document.getElementById("bl").innerHTML = "Bucket List";
document.getElementById("bl1").innerHTML = "Game Development";
document.getElementById("bl2").innerHTML = "Angajare in Domeniu - anul II";
document.getElementById("bl3").innerHTML = "Curs Robotica";

document.body.style.backgroundColor = 'black';
document.getElementById('a').style.color = 'white';
document.getElementById('l').style.color = 'white';
document.getElementById('b').style.color = 'white';
document.getElementById('job').style.color = 'white';

document.getElementById("uaua").setAttribute("style","opacity:0.7");

}
function mouseI()
{
    var azi = new Date();
    var an = azi.getFullYear();
    
    var b = 2002;
    var c = Math.abs(an-b);
    document.getElementById("an").innerHTML = c;
}



function mouseO()
{
document.getElementById("an").innerHTML = "2002";
}

