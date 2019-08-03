function openTab(evt,Name){
    var i, tabcontent, tablinks;
    document.getElementById('p1').style.display = 'none';
    tabcontent=document.getElementsByClassName("tabcontent");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].style.display='none';
    }
    tablinks=document.getElementsByClassName("tablinks");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].className=tablinks[i].className.replace("  active","");
    }
    document.getElementById(Name).style.display='block';
    evt.currentTarget.className += "active";
}

function myFunction(){
    document.getElementById('tmcc').style.display='none';

    document.getElementById('sv').style.display='none';
    document.getElementById('cogniqa').style.display='none';
    document.getElementById('CafeNext').style.display=' none';

}