const gunting = document.getElementById("gunting");
const batu = document.getElementById("batu");
const kertas = document.getElementById("kertas");

console.log(gunting);
console.log(batu);
console.log(kertas);

function mainkanGame(pilihanUser){
    console.log(pilihanUser)

    const angkaAcak = Math.random();
    const angkaBulat = angkaAcak * 3;
    const angkaBulat2 = Math.floor(angkaBulat)
    const pilihanKomputer =["gunting", "batu", "kertas"];
    
    
    const komputer = pilihanKomputer[angkaBulat2]
    console.log(komputer)
    
    if (pilihanUser === "gunting" && komputer === "gunting"){
        console.log("kamu seri");
    }else if (pilihanUser === "gunting" && komputer === "kertas"){
        console.log("kamu menang")
    }else if (pilihanUser === "gunting" && komputer === "batu"){
    console.log("kamu kalah")};
    
    if (pilihanUser === "batu" && komputer === "batu"){
        console.log("kamu seri");
    }else if (pilihanUser === "batu" && komputer === "kertas"){
        console.log("kamu kalah")
    }else if (pilihanUser === "batu" && komputer === "gunting"){
    console.log("kamu menang")};
    
    if (pilihanUser === "kertas" && komputer === "kertas"){
        console.log("kamu seri");
    }else if (pilihanUser === "kertas" && komputer === "batu"){
        console.log("kamu menang")
    }else if (pilihanUser === "kertas" && komputer === "gunting"){
    console.log("kamu kalah")};
};

gunting.addEventListener("click", () => {
    mainkanGame("gunting");
    
});
batu.addEventListener("click", () => {
    mainkanGame("batu");
    
});
kertas.addEventListener("click", () => {
    mainkanGame("kertas");
    
});


