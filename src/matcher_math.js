global.matcher_math = function(max_num,min_num,nums){
    if(min_num === undefined){
	min_num = 1;
    }
    if(nums === undefined){
	nums = 1;
    }
    var random_nums = [];
    
    for(var x=0; x<=nums; x++){
	var y = generate_random();
	random_nums.push(y);
    }

    return random_nums;


    
    function generate_random(){
      random_num = Math.floor(Math.random() * max_num) + min_num; 
      return random_num;
    }
}


