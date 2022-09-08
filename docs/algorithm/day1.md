# day 1

## 选择排序

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class Q1 {
    /**
     * 输入一个数组，通过选择排序后打印
     * e.g.
     * input
     * 5
     * 2 6 7 5 3
     * output
     * 2 3 5 6 7
     */
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StreamTokenizer in = new StreamTokenizer(br);
        PrintWriter out = new PrintWriter(System.out);
        while (in.nextToken() != StreamTokenizer.TT_EOF) {
            // read input array's len
            int len = (int) in.nval;
            // initialize an array
            int[] arr = new int[len];
            for (int i = 0; i < len; i++) {
                in.nextToken();
                arr[i] = (int) in.nval;
            }
            doSelectionSort(arr);
            for (int i = 0; i < len; i++) {
                out.print(arr[i]);
                if (i == len - 1) {
                    out.print("\n");
                } else {
                    out.print("\t");
                }
            }
            out.flush();
        }
    }

    private static void doSelectionSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int minIdx = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIdx]) minIdx = j;
            }
            if (minIdx != i) {
                int temp = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = temp;
            }
        }
    }
}
```

## 冒泡排序

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class Q2 {
    /**
     * 输入一个数组，通过选择排序后打印
     * e.g.
     * input
     * 5
     * 2 6 7 5 3
     * output
     * 2 3 5 6 7
     */
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StreamTokenizer in = new StreamTokenizer(br);
        PrintWriter out = new PrintWriter(System.out);
        while (in.nextToken() != StreamTokenizer.TT_EOF) {
            int len = ((int) in.nval);
            int[] arr = new int[len];
            for (int i = 0; i < len; i++) {
                in.nextToken();
                arr[i] = (int) in.nval;
            }
            doBubbleSort(arr);
            for (int i = 0; i < len; i++) {
                out.print(arr[i]);
                if (i == len - 1) {
                    out.print("\n");
                } else {
                    out.print("\t");
                }
            }
            out.flush();
        }
    }

    private static void doBubbleSort(int[] arr) {
        int len = arr.length;
        for (int i = len - 1; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
```

## 插入排序

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class Q3 {
    /**
     * 输入一个数组，通过选择排序后打印
     * e.g.
     * input
     * 5
     * 2 6 7 5 3
     * output
     * 2 3 5 6 7
     */
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StreamTokenizer in = new StreamTokenizer(br);
        PrintWriter out = new PrintWriter(System.out);
        while (in.nextToken() != StreamTokenizer.TT_EOF) {
            int len = (int) in.nval;
            int[] arr = new int[len];
            for (int i = 0; i < len; i++) {
                in.nextToken();
                arr[i] = (int) in.nval;
            }
            doInsertSort(arr);
            for (int i = 0; i < len; i++) {
                out.print(arr[i]);
                if (i == len - 1) {
                    out.print("\n");
                } else {
                    out.print("\t");
                }
            }
            out.flush();
        }
    }

    private static void doInsertSort(int[] arr) {
        int len = arr.length;
        for (int i = 0; i < len - 1; i++) {
            for (int j = i + 1; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    swap(arr, j, j - 1);
                }
            }
        }
    }


    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```