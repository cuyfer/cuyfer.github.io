


    function tutup() {
        document.getElementById('popup').style.display = 'none';
    }
  
  
  const kontak = document.getElementById('kontak')
  kontak.addEventListener('click',function(){
    window.open('https://WA.me/6283182719413?text=*Assalamualaikum Saya Dari Website Mu*')
  })
  
  const sss = document.querySelector('.ales')
  sss.addEventListener('click',function(){
        document.getElementById('popup').style.display = 'flex';
  })
  
    const ketikElemen = document.getElementById('ketik');
    const kataKetik = ['....','Hmm🤔','Ahaa baru ingat!','seorang','Software Engineering','Cyber Security','Student😁'];
    let index = 0;
    let indexKarakter = 0;
    let apus = false;

   function ketik() {
    const teksKetik = kataKetik[index];
    if (apus) {
        ketikElemen.textContent = teksKetik.substring(0, indexKarakter - 1);
        indexKarakter--;
    } else {
        ketikElemen.textContent = teksKetik.substring(0, indexKarakter + 1);
        indexKarakter++;
    }

    if (!apus && indexKarakter === teksKetik.length) {
        apus = true;
        setTimeout(ketik, 1000);
    } else if (apus && indexKarakter === 0) {
        apus = false;
        index = (index + 1) % kataKetik.length;
        setTimeout(ketik, 500);
    } else {
        setTimeout(ketik, 100);
    }
}

ketik();



  