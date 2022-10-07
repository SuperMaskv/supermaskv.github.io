# day 10

## 归并排序(递归实现)


```java
public class Q1 {
    /**
     * impl merge sort in recursion way
     */
    public void mergeSort(int[] arr) {
        if (arr == null || arr.length == 0) return;
        process(arr, 0, arr.length - 1);
    }

    private void process(int[] arr, int left, int right) {
        if (left == right) return;
        int mid = left + ((right - left) >> 1);
        process(arr, left, mid);
        process(arr, mid + 1, right);

    }

    private void merge(int[] arr, int left, int mid, int right) {
        int[] helper = new int[right - left + 1];
        int index = 0;
        int p1 = left;
        int p2 = mid + 1;
        while (p1 <= mid && p2 <= right) helper[index++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
        while (p1 <= mid) helper[index++] = arr[p1++];
        while (p2 <= right) helper[index++] = arr[p2++];
        for (int i = 0; i < helper.length; i++) {
            arr[left + i] = helper[i];
        }
    }
}
```

## 归并排序(非递归实现)

```java
public class Q2 {
    /**
     * impl merge sort without recursion
     */

    public static void mergeSort(int[] arr) {
        if (arr == null || arr.length < 2) return;
        int step = 1;
        int len = arr.length;
        while (step < len) {
            int left = 0;
            while (left < len) {
                // 确定L和R的区间
                int L = left;
                int mid = len - left <= step ? len - 1 : left + step - 1;
                if (mid + 1 >= len) break;
                int R = len - mid - 1 <= step ? len - 1 : mid + step;
                merge(arr, L, mid, R);
                left += step;
            }
            if (step > len / 2) break;
            step *= 2;
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int[] helper = new int[right - left + 1];
        int p1 = left;
        int p2 = mid + 1;
        int cur = 0;
        while (p1 <= mid && p2 <= right) helper[cur++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
        while (p1 <= mid) helper[cur++] = arr[p1++];
        while (p2 <= right) helper[cur++] = arr[p2++];
        for (int i = 0; i < helper.length; i++) {
            arr[left++] = helper[i];
        }
    }
}
```

## 递归实现快排

```java
public class Q3 {
    /**
     * impl quick sort using recursion
     */
    public void quickSort(int[] arr) {
        if (arr == null || arr.length < 2) return;
        process(arr, 0, arr.length - 1);
    }

    private void process(int[] arr, int left, int right) {
        if (left >= right) return;
        int[] border = partition(arr, left, right);
        if (border == null) return;
        int eqLeft = border[0];
        int eqRight = border[1];
        process(arr, left, eqLeft - 1);
        process(arr, eqRight + 1, right);
    }

    /**
     * 根据arr[right]将arr分为3个部分，依次为小于arr[right]的区域、等于arr[right]的区域，大于arr[right]的区域。
     * 返回等于arr[right]的边界
     */
    private int[] partition(int[] arr, int left, int right) {
        // 如果需要操作的区间元素个数小于1个，直接返回
        if (left >= right) return null;
        // 小于arr[right]区域的右边界
        int ltRight = left - 1;
        // 大于arr[right]区域的左边界
        int gtLeft = right;
        int cur = left;
        while (cur < gtLeft) {
            if (arr[cur] < arr[right]) {
                swap(arr, cur, ltRight + 1);
                ltRight++;
                cur++;
            } else if (arr[cur] > arr[right]) {
                swap(arr, cur, gtLeft - 1);
                gtLeft--;
            } else {
                cur++;
            }
        }
        swap(arr, gtLeft, right);
        return new int[]{ltRight + 1, gtLeft};
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```