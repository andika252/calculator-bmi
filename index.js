//ambil nilai dari form
var kesimpulan ; 


//Fungsi ambil nilai gender dropdown list
function ambilGender() {
    let gender = document.getElementById("gender").value  ; 
    // console.log(gender) ;
}

// Fungsi Hitung BMI
function hitungBMI() {
    let gender = document.getElementById("gender").value  ;
    var berat = document.getElementById("beratBadan").value ;
    var usia = document.getElementById("usia").value ; 
    var tinggi = document.getElementById("tinggi").value; 
    var hasilHitung = document.getElementById("hasil-hitung");
    var kesimpulan2 = document.getElementById("kesimpulan"); 

    //Ubah tinggi ke meter 
    tinggi /= 100 ; 

    //Rumus perhitungan BMI
    berat /= tinggi * tinggi ; 

    //Jika hasil = nan berarti berat = 0
    if (isNaN(berat)) {
        berat = 0 ; 
    }

    let berat2 = berat.toFixed(2) ; //Membatasi nilai koma
    hasilHitung.innerHTML = berat2 ; // Menampilkan pada hasil
    
    //Kesimpulan Berdasarkan Kondisi dari nilai berat2 
    if ( berat2 < 18.5 ) {
         kesimpulan = "Anda Kekurangan Berat Badan";
         console.log (kesimpulan) ; 
    } else if ( berat2 >= 18.5 && berat2 <= 24.9 ) {
        kesimpulan = "Berat Badan anda Normal"
        console.log (kesimpulan) ; 
    } else if ( berat2 >= 25 && berat2 <= 29.9 ) {
        kesimpulan = "Anda Kelebihan Berat Badan" 
        console.log (kesimpulan) ; 
    } else {
        kesimpulan = "Anda Mengalami Kegemukan atau Obesitas"
        console.log (kesimpulan) ; 
    }

    kesimpulan2.innerHTML = kesimpulan ; 

    document.getElementById("hasil").style.display = "block" ; 

 }



 //Fungsi Reset Form
 function reset() {
    // document.getElementsById("beratBadan").value = "0" ; 
    // document.getElementsById("usia").value = "0" ; 
    // document.getElementsById("tinggi").value = "0" ; 
    // document.getElementsById("hasil-hitung").innerHTML = "0" ; 
    // document.getElementsById("kesimpulan").innerHTML = "0" ; 

    window.location.reload();  

 }