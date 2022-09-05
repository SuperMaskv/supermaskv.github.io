# day 2

## 二分查找

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class Q1 {
    /**
     * binary search
     * e.g.
     * input
     * 5 3
     * 1 3 4 8 9
     * output
     * 1
     */
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StreamTokenizer in = new StreamTokenizer(br);
        PrintWriter out = new PrintWriter(System.out);
        while (in.nextToken() != StreamTokenizer.TT_EOF) {
            int len = (int) in.nval;
            in.nextToken();
            int target = (int) in.nval;
            int[] arr = new int[len];

            for (int i = 0; i < len; i++) {
                in.nextToken();
                arr[i] = (int) in.nval;
            }

            out.println(binarySearch(arr, target));
            out.flush();
        }
    }

    private static int binarySearch(int[] arr, int target) {
        int len = arr.length;
        if (len == 0) return -1;
        int left = 0;
        int right = len;
        while (left < right) {
            int mid = ((right - left) >> 1) + left;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid;
        }
        return -1;
    }
}
```