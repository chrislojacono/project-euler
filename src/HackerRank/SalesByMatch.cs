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

    //THIS WAS THE ANSWER
        static int sockMerchant(int n, int[] ar) {
    var colors = new List<int>();
    int pairs = 0;

    for (int i = 0; i < n; i++) {
        if (!colors.Contains(ar[i])) {
            colors.Add(ar[i]);
        } else {
            pairs++;
            colors.Remove(ar[i]);
        }
    }

        return pairs;
    }