
function showGender()
{
	gender = document.getElementById("gender").value;

	if(gender == "M")
	{
		document.getElementById("wow1").style.display='block'
	}
    
	else
	{
		document.getElementById("wow1").style.display='none'
	}

	if(gender == "F")
	{
		document.getElementById("wow2").style.display='block'
	}
    
	else
	{
		document.getElementById("wow2").style.display='none'
	}
	if(gender == "nothing")
	{
		document.getElementById(".").style.display='block'
	}
    
	else
	{
		document.getElementById(".").style.display='none'
	}

	

	

	
}
