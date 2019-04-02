function greaterCommonDivisor(arr)
{
  var gdc = 1;
  for(var selectedDivisor = 2; ;selectedDivisor++){
      if(!isPrime(selectedDivisor)){
          continue;
      }
      
      var allCanBeDivided = true;
      for(var i = 0; i < arr.length - 1; i++){
          if(arr[i] === 1){
             return gdc;
          }
          
          if(arr[i] % selectedDivisor !== 0){
              allCanBeDivided = false;
              break;
          }
          
          arr[i] = arr[i]/selectedDivisor;
      }
      
      if(allCanBeDivided){
          gdc *= selectedDivisor;
      }
  }
}

function isPrime(num){
  for(var i = 2; i < num; i++){
      if(num % i === 0){
          return false;
      }
  }
  
  return true;
}

greaterCommonDivisor([2,3,4,5,6])//should result 1
greaterCommonDivisor([2,4,6,8,10])//should result 2
