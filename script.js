const firstName= "Natalia";
const lastName= "Quezada";
const Study="6 months";
const Goal= "Graduate";
const Intrest= "pentesting and ethical hacking";

const introduction = `My name is ${firstName} ${lastName}. I have been at SCC for ${Study}. I want to ${Goal} and move into ${Intrest}`;

document.getElementById("introduction").innerHTML= introduction;
