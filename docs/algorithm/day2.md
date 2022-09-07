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

## 二分查找左边界

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

public class Q2 {
    /**
     * 二分查找 >= 2 的最左侧位置
     * e.g.
     * input
     * 5 2
     * 1 2 2 3 4
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
            out.println(getLeftBorder(arr, target));
            out.flush();
        }
    }

    private static int getLeftBorder(int[] arr, int target) {
        if (arr == null || arr.length == 0) {
            return -1;
        }
        int len = arr.length;
        int left = 0;
        int right = len;
        int ans = -1;
        while (left < right) {
            int mid = ((right - left) >> 1) + left;
            if (arr[mid] >= target) {
                ans = mid;
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    }
}

```

## 二分查找局部最小

### 问题描述

有一个数组arr，数组无序且相邻的数字不等，求其中一个局部最小值，并返回其下标

### 思路

先处理边界，如果0位置上的数小于1位置上的数，那么0就是一个局部最小值；如果N-1位置上的数小于N-2位置上的数，那么N-1就是一个局部最小值。

对于arr[0]>arr[1] && arr[N-1]>arr[N-2]的情况下，数组arr中必存在一个局部最小值。

若arr[mid]的左右两个数都大于arr[mid]，那么arr[mid]就是一个局部最小值；

如果arr[mid] < arr[mid - 1]，那么局部最小值就在[mid, right)；

如果 arr[mid] < arr[mid + 1], 局部最小值就在 [left, mid)。

### 参考代码

```java
public class Q3 {
    /**
     * 二分查找局部最小值
     * 数组无序，且相邻元素不相等
     * e.g.
     * input
     * 7
     * 8 5 4 6 5 6 7
     * output
     * 2 or 4
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
            out.println(getLocalMin(arr));
            out.flush();
        }
    }

    private static int getLocalMin(int[] arr) {
        if (arr == null || arr.length == 0) return -1;
        int len = arr.length;
        if (len == 1) return 0;
        if (arr[0] < arr[1]) return 0;
        if (arr[len - 1] < arr[len - 2]) return len - 1;
        int left = 0;
        int right = len;
        while (left < right - 2) {
            int mid = ((right - left) >> 1) + left;
            if (arr[mid - 1] > arr[mid] && arr[mid + 1] > arr[mid]) {
                return mid;
            } else if (arr[mid - 1] < arr[mid]) right = mid;
            else if (arr[mid + 1] < arr[mid]) left = mid + 1;
        }
        return arr[left] < arr[right] ? left : right;
    }
}
```

### 总结

二分查找不只是能用在有序的数组中，对于可以确定答案在mid哪一侧的问题都是适用的。
