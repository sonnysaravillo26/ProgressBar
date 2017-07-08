
// SONNY SCRIPT 
function selectedBar(){  
    var progBar = $("#selectProgBar").find(':selected').attr('data-id');
    var selectedVal = $("#selectProgBar").find(':selected').val();
 
    console.log('progBar ' +selectedVal);

    if (selectedVal != '0'){
        //THIS BAR ACTIVE   
        if (selectedVal == '1'){ 
            $('#thisBar1').addClass('active');
            $('#thisBar2').removeClass('active');
            $('#thisBar3').removeClass('active');
        }else if (selectedVal == '2'){
            $('#thisBar1').removeClass('active');
            $('#thisBar2').addClass('active');
            $('#thisBar3').removeClass('active');
        }else if (selectedVal == '3'){
            $('#thisBar1').removeClass('active');
            $('#thisBar2').removeClass('active');
            $('#thisBar3').addClass('active');
        }else { 
            $('#thisBar1').removeClass('active');
            $('#thisBar2').removeClass('active');
            $('#thisBar3').removeClass('active');
        }
        
         //ENABLE BUTTONS
        $('.mainBtns').prop("disabled",false);

        $('#curSelectBar').val('bar'+selectedVal);

        barId = document.getElementById('bar'+selectedVal);  

        var x = barId.style.width;
        console.log('----> ' +x);

        var newX = x.substring(0, x.length -1);
        console.log(newX);
        
        $('#curBarWidth').val(newX); 

    }else {

         $('#curBarWidth').val(""); 
         $('#curSelectBar').val("");
         
         //DISABLE BUTTONS
         $('.mainBtns').prop("disabled",true);
         $('#thisBar1').removeClass('active');
         $('#thisBar2').removeClass('active');
         $('#thisBar3').removeClass('active');
    }  
}


function putVal(objButton){  
    //limit  
    var thelimit  = $('#curLimit').val(); 
    console.log('the LIMIT!' +thelimit );
    var numLimit = parseInt(thelimit);


    // alert('objButton--> ' +objButton.value); 
    var val = objButton.value;

    console.log('button value-- > '  +val);

    //1 SELECTED PROGRESS BAR  
    var xId = $('#curSelectBar').val(); 
    console.log('YOU SELECTED---> ' +xId);

    //THE CURRENT VALUE AND BUTTON VALUE 
    var curValue = $('#curBarWidth').val(); 
    console.log('curValue ---> ' +curValue);
    console.log('val ----> ' +val);
     
    var x = parseInt(curValue); 
    var y = parseInt(val);

    var sumValue = x + y; 
    console.log('THE SUM VALUE ---> ' +sumValue);

    var sumValuePer = sumValue+'%';
    console.log('sumValuePer -- >' +sumValuePer); 

    //PUT THE TOTAL VAL 
    $('#'+xId).css({
        "width": sumValuePer
    }); 

    // 2 Put the udpated Status Value  
    console.log('THE CURRENT SUM ' +sumValue);
    $('#curBarWidth').val(sumValue); 
 
    // 3 Update the Status  
    $('#'+xId).attr("aria-valuenow", sumValue);
    $('#curRd'+xId).val(sumValue);
    
    //COLOR CONDITION
    //IF reach zero 
    if(sumValue < 0) { 
        $('#curBarWidth').val('0');

        $('#'+xId).removeClass("progress-bar-darkcyan");
        $('#'+xId).removeClass("progress-bar-green");
        $('#'+xId).removeClass("progress-bar-red");
        $('#'+xId).addClass("progress-bar-orange"); 
        console.log('THE VALUE IS ALREADY NEGATIVE or ZEOR!');
    }
    else if (sumValue >= numLimit) {
        console.log('=======YOU HAVE REACH ITS LIMIT! back to zero!======');
       $('#thisModal').modal('show');
    }
    else if (sumValue > 1 && sumValue < 30){

        $('#'+xId).removeClass("progress-bar-darkcyan");
        $('#'+xId).removeClass("progress-bar-green");
        $('#'+xId).removeClass("progress-bar-red");
        $('#'+xId).addClass("progress-bar-orange"); 
        console.log('orange!');
    }
    else if(sumValue > 31 && sumValue < 60 ){ 
        $('#'+xId).removeClass("progress-bar-green");
        $('#'+xId).removeClass("progress-bar-red");
        $('#'+xId).removeClass("progress-bar-orange");
        $('#'+xId).addClass("progress-bar-darkcyan");
        console.log('darkcyan!');
    }
    else if (sumValue > 61 && sumValue < 100){
        $('#'+xId).removeClass("progress-bar-red");
        $('#'+xId).removeClass("progress-bar-orange");
        $('#'+xId).removeClass("progress-bar-darkcyan");
        $('#'+xId).addClass("progress-bar-green");
        console.log('green!');
    } 
    else if (sumValue >= 101 ) {
        $('#'+xId).removeClass("progress-bar-darkcyan");
        $('#'+xId).removeClass("progress-bar-orange");
        $('#'+xId).removeClass("progress-bar-green");
        $('#'+xId).addClass("progress-bar-red");
        console.log('red!');
        console.log('OVER PROGRESS');   
    }
    else{
        console.log('NORMAL');
    }
    
    // RESET READING 
    displayPercent();
}    


//PROGRESS BAR CURRENT READ
function colorCode1(x) {  

    var sumValue = x; 
    //COLOR CONDITION
    //IF reach zero
    if(sumValue < 0) { 
        $('#curBarWidth').val('0');

        $('#bar1').removeClass("progress-bar-darkcyan");
        $('#bar1').removeClass("progress-bar-green");
        $('#bar1').removeClass("progress-bar-red");
        $('#bar1').addClass("progress-bar-orange");   

        console.log('THE VALUE IS ALREADY NEGATIVE or ZEOR!'); 
    }
    else if (sumValue > 1 && sumValue < 30){

        $('#bar1').removeClass("progress-bar-darkcyan");
        $('#bar1').removeClass("progress-bar-green");
        $('#bar1').removeClass("progress-bar-red");
        $('#bar1').addClass("progress-bar-orange"); 
  
        console.log('orange!');
    }
    else if(sumValue > 31 && sumValue < 60 ){ 
       $('#bar1').removeClass("progress-bar-green");
       $('#bar1').removeClass("progress-bar-red");
       $('#bar1').removeClass("progress-bar-orange");
       $('#bar1').addClass("progress-bar-darkcyan");
  
        console.log('darkcyan!');
    }
    else if (sumValue > 61 && sumValue < 100){
        $('#bar1').removeClass("progress-bar-red");
        $('#bar1').removeClass("progress-bar-orange");
        $('#bar1').removeClass("progress-bar-darkcyan");
        $('#bar1').addClass("progress-bar-green");
  
        console.log('green!');
    }
    else if (sumValue >= 101 ) {
        $('#bar1').removeClass("progress-bar-darkcyan");
        $('#bar1').removeClass("progress-bar-orange");
        $('#bar1').removeClass("progress-bar-green");
        $('#bar1').addClass("progress-bar-red"); 
    
        console.log('red!');
        console.log('OVER PROGRESS');
    }
    else{
        console.log('NORMAL');
    }
}



function colorCode2(x) {
    var sumValue = x; 
    //COLOR CONDITION
    //IF reach zero
    if(sumValue < 0) { 
        $('#curBarWidth').val('0'); 
        $('#bar2').removeClass("progress-bar-darkcyan");
        $('#bar2').removeClass("progress-bar-green");
        $('#bar2').removeClass("progress-bar-red");
        $('#bar2').addClass("progress-bar-orange"); 
 
        console.log('THE VALUE IS ALREADY NEGATIVE or ZEOR!'); 
    }
    else if (sumValue > 1 && sumValue < 30){ 
        $('#bar2').removeClass("progress-bar-darkcyan");
        $('#bar2').removeClass("progress-bar-green");
        $('#bar2').removeClass("progress-bar-red");
        $('#bar2').addClass("progress-bar-orange"); 
 
        console.log('orange!');
    }
    else if(sumValue > 31 && sumValue < 60 ){  
       $('#bar2').removeClass("progress-bar-green");
       $('#bar2').removeClass("progress-bar-red");
       $('#bar2').removeClass("progress-bar-orange");
       $('#bar2').addClass("progress-bar-darkcyan"); 
        console.log('darkcyan!');
    }
    else if (sumValue > 61 && sumValue < 100){ 
        $('#bar2').removeClass("progress-bar-red");
        $('#bar2').removeClass("progress-bar-orange");
        $('#bar2').removeClass("progress-bar-darkcyan");
        $('#bar2').addClass("progress-bar-green"); 
        console.log('green!');
    }
    else if (sumValue >= 101 ) {  
        $('#bar2').removeClass("progress-bar-darkcyan");
        $('#bar2').removeClass("progress-bar-orange");
        $('#bar2').removeClass("progress-bar-green");
        $('#bar2').addClass("progress-bar-red"); 

        console.log('red!');
        console.log('OVER PROGRESS');

        

    }else{
        console.log('NORMAL');
    }
}


function colorCode3(x) {
    var sumValue = x; 
    //COLOR CONDITION
    //IF reach zero
    if(sumValue < 0) { 
        $('#curBarWidth').val('0'); 

        $('#bar3').removeClass("progress-bar-darkcyan");
        $('#bar3').removeClass("progress-bar-green");
        $('#bar3').removeClass("progress-bar-red");
        $('#bar3').addClass("progress-bar-orange"); 
        console.log('THE VALUE IS ALREADY NEGATIVE or ZEOR!'); 
    }
    else if (sumValue > 1 && sumValue < 30){  
        $('#bar3').removeClass("progress-bar-darkcyan");
        $('#bar3').removeClass("progress-bar-green");
        $('#bar3').removeClass("progress-bar-red");
        $('#bar3').addClass("progress-bar-orange"); 
        console.log('orange!');
    }
    else if(sumValue > 31 && sumValue < 60 ){    
       $('#bar3').removeClass("progress-bar-green");
       $('#bar3').removeClass("progress-bar-red");
       $('#bar3').removeClass("progress-bar-orange");
       $('#bar3').addClass("progress-bar-darkcyan");
        console.log('darkcyan!');
    }
    else if (sumValue > 61 && sumValue < 100){ 
        $('#bar3').removeClass("progress-bar-red");
        $('#bar3').removeClass("progress-bar-orange");
        $('#bar3').removeClass("progress-bar-darkcyan");
        $('#bar3').addClass("progress-bar-green");
        console.log('green!');
    }
    else if (sumValue >= 101 ) { 
        $('#bar3').removeClass("progress-bar-darkcyan");
        $('#bar3').removeClass("progress-bar-orange");
        $('#bar3').removeClass("progress-bar-green");
        $('#bar3').addClass("progress-bar-red");

        console.log('red!');
        console.log('OVER PROGRESS');
    }else{
        console.log('NORMAL');
    }
}
 
function pageRefresh() {
    location.reload();
}

function displayPercent() {
   var one =  $('#curRdbar1').val(); 
   $('#reading1').text(one);

   var two =  $('#curRdbar2').val(); 
   $('#reading2').text(two);

   var three =  $('#curRdbar3').val(); 
   $('#reading3').text(three); 

}