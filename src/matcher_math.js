global.matcher_math = function(max_num,min_num,nums){
    
    if(min_num === undefined){
	min_num = 1;
    }
    
    if(nums === undefined){
	nums = 1;
    }
    var random_nums = [];
    
    try{
	for(var x=0; x<=nums; x++){
	    var y = generate_random(min_num, max_num);
	    random_nums.push(y);
	}
	
	return random_nums;
    }

    catch(err){
	throw "Initial Input must be Number";
    }

    function generate_random(min,max){
	random_num = Math.floor(Math.random() * max) + min; 
	return random_num;
    }
}


