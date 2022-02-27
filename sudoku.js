$(document).ready(function()
{
	var slct=$("tr>td");
    slct.each(function()
    {	
    	$(this).html("<select id=\""+$(this).attr("id")+"_selection\"><option value=1 option:selected>1</option>\
   		<option value=2>2</option>\
    	<option value=3>3</option>\
    	<option value=4>4</option>\
    	<option value=5>5</option>\
    	<option value=6>6</option>\
    	<option value=7>7</option>\
    	<option value=8>8</option>\
    	<option value=9>9</option>\
    	</select>"); 
    });
	$("*").removeClass("active");
	$("*").removeClass("complete");
	$("*").removeClass("error");
	var tab=[];
	var sum=0;
	var nmb=1;
	
	$("select").onChange(majtab());
	
	function majtab()
	{
		slct.each(function()
		{
			tab[nmb]=parseInt($("#"+nmb.toString()+"_selection").find("option:selected").text());
	//		console.log(tab[nmb]);
			nmb+=1;
		});
		sum = tab.reduce((a, b)=> a + b, 0);	
//		console.log(sum);   
/*	if (sumlk <10){
	switch(sumlk) {
	
	case 9:
	
	$("#0").addClass("complete").html(tab[0]);
	$("#1").addClass("complete").html(tab[1]);
	$("#2").addClass("complete").html(tab[2]);
	break;
	
	case 0:
	 break;
	 
	default:
	
	$("#0").addClass("active").html(tab[0]);
	$("#1").addClass("active").html(tab[1]);
	$("#2").addClass("active").html(tab[2]);
	break;
	}
	}
	else
	{
	$("#0").addClass("error").html(tab[0]);
	$("#1").addClass("error").html(tab[1]);
	$("#2").addClass("error").html(tab[2]);
	}
	*/

});