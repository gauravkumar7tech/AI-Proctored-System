public class{
public static void main(String[] args){
    int[] arr  = {3,4,2,56,78,34,90};
    int n = arr.length; 
    for(inti  = 0; i< n-1; i+++){
        for(int j= 0; j< n-i-1; i++){
            if(arr[j] >arr[j+1]){
                int temp  = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    for(int i  =0; i< n; i++){
        System.out.print(arr[i]+ ",");
    }
    System.out.println();
}
}