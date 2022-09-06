# 算法

## ACM 风格输入输出 Java 最佳实践

```java
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        StreamTokenizer streamTokenizer = new StreamTokenizer(bufferedReader);
        PrintWriter printWriter = new PrintWriter(new OutputStreamWriter(System.out));
        while (streamTokenizer.nextToken() != StreamTokenizer.TT_EOF) {
            printWriter.println(streamTokenizer.sval);
            printWriter.flush();
        }
    }
}
```

## 前缀

### 问题描述

对于一个数组 arr ，如果需要频繁的求这个数组某个区间上的和，该如何设计算法。

### 思路

为了避免不必要的计算，可以将部分计算结果缓存起来，占用缓存空间最小的方式就是使用前缀和，及生成一个和 arr 长度一致的缓存数组 h , h[i] = arr[i] + ... + arr[0], 计算 i ~ j 上的和时，只需要返回 h[j] - h[i - 1] 即可。

### 代码

```java
public class RangeSum {
    private final int[] preSum;

    public RangeSum(int[] arr) {
        int len = arr.length;
        if (len == 0) throw new RuntimeException("array is empty");
        this.preSum = new int[len];
        this.preSum[0] = arr[0];
        for (int i = 1; i < len; i++) {
            this.preSum[i] = this.preSum[i - 1] + arr[i];
        }
    }

    private int getSum(int start, int end) {
        return start == 0 ? this.preSum[end] : this.preSum[end] - this.preSum[start - 1];
    }
}
```

## 01 发射器

### 使用等概率生成1-5的函数来等概率生成1-7

```java
public class ZeroOne {
    /**
     * 等概率生成 1-5
     */
    public int f1() {
        return (int) (Math.random() * 4 + 1);
    }

    /**
     * 等概率生成 0, 1
     */
    public int f2() {
        int ans;
        do {
            ans = f1();
        } while (ans == 3);
        return ans < 3 ? 0 : 1;
    }

    /**
     * 等概率生成 1-7
     */
    public int f3() {
        int ans;
        do {
            ans = (f2() << 2) + (f2() << 1) + f2();
        } while (ans == 0);
        return ans;
    }
}
```

### 使用不等概率生成 0 和 1 的函数来等概率生成 0 和 1

```java
public class ZeroOne2 {
    /**
     * 不等概率生成 0 和 1
     */
    public int f1() {
        return Math.random() > 0.2 ? 0 : 1;
    }

    /**
     * 等概率生成 0 和 1
     */
    public int f2() {
        int ans;
        do {
            ans = (f1() << 1) + f1();
        } while (ans == 0 || ans == 3);
        return ans == 1 ? 0 : 1;
    }
}
```

## 对数器

使用随机函数来生成大批量的测试数据来验证算法的正确性。