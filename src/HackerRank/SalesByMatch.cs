class Solution {

    // Complete the sockMerchant function below.
    static int sockMerchant(int n, int[] ar) {
      var left = 0;
      var right = 1;
      var pairOfSocks = 0;
      while(left <= ar.Count()){
          if(ar[left] == ar[right]){
              pairOfSocks++;
          }else if(right == ar.Count()){
              left++;
              right = left + 1;
          }else{
              right++;
          }
      }
        return pairOfSocks;
    }

    //Function is too slow