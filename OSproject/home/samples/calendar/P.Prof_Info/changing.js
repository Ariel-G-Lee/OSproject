var cnt=1;
function changing(){
	var img1=document.getElementById("img1");
	var img2=document.getElementById("img2");
	var img3=document.getElementById("img3");
	if(cnt==1){
		img1.src="yes.png";
		img2.src="no.png";
		img3.src="no.png";
	}else if(cnt==2){
		img2.src="yes.png";
		img1.src="no.png";
		img3.src="no.png";
	}else{
		img3.src="yes.png";
		img2.src="no.png";
		img1.src="no.png";
	}
}