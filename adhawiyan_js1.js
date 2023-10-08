//if, else, nested if

var nilai = 175;

if (nilai >= 140) {
  console.log("Anda mengalami hipertensi");
} else if (nilai >= 120) {
  console.log("Anda memiliki tekanan darah yang normal");
} else
  console.log("APertahankan normalnya tekanan darah anda.");
  
  if (nilai >= 150) {
    console.log("Jaga Kesehatan anda.");
  } else {
    console.log("Atur pola makan anda.");
  }


  //switch  case

  var buah = "markisa";

  switch (buah) {
    case "pisang":
      console.log("Ini adalah buah pisang.");
      break;
    case "markisa":
      console.log("Ini adalah buah markisa.");
      break;
    case "jeruk":
      console.log("Ini adalah buah jeruk.");
      break;
    default:
      console.log("Ini bukan buah yang dikenal.");
  }
  

//for statement

for (var i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Iterasi akan dilewati jika i sama dengan 3.
  }
  console.log(i);
}


// while, do while

var i = 1;
do {
  if (i === 4) {
    break; // Loop akan dihentikan jika i sama dengan 4.
  }
  console.log(i);
  i++;
} while (i <= 5);



//function
function sapa() {
  console.log("Hai, apakabar?");
}

sapa(); // Output:


