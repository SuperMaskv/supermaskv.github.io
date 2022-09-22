# day 6

## 使用long数组实现bitmap

```java
public class MyBitmap {
    long[] map;

    /**
        * 如果需要记录最多max个元素的状态，那么就需要max/64+1个long类型；
        */
    public MyBitmap(int max) {
        this.map = new long[(max + 64) >> 6];
    }

    /**
        * 将value位置上的元素记录为1，在map数组中的下标为value/64；
        * value&63表示value%64；
        */
    public void add(int value) {
        this.map[value >> 6] |= (1L << (value & 63));
    }
    
    public void delete(int value) {
        this.map[value >> 6] &= ~(1L << (value & 63));
    }

    public boolean contains(int value) {
        return (this.map[value >> 6] & (1L << (value & 63))) != 0;
    }
}
```

## 使用位运算实现加减乘除

- a^b 等于a和b无进位相加
- (a&b)<<1 等于a和b的进位信息

```java
public class Q2 {
    public static int plus(int n1, int n2) {
        int sum = n1;
        while (n2 != 0) {
            sum = n1 ^ n2;
            n2 = (n1 & n2) << 1;
            n1 = sum;
        }
        return sum;
    }

    public static int minus(int n1, int n2) {
        return plus(n1, plus(~n2, 1));
    }

    public static int multiple(int n1, int n2) {
        int res = 0;
        while (n2 != 0) {
            if ((n2 & 1) != 0) res = plus(res, n1);
            n1 <<= 1;
            n2 >>>= 1;
        }
        return res;
    }

    public static int divide(int n1, int n2) {
        int a = n1 < 0 ? plus(~n1, 1) : n1;
        int b = n2 < 0 ? plus(~n2, 1) : n2;
        int res = 0;
        for (int i = 30; i >= 0; i = minus(i, 1)) {
            if ((a >> i) >= b) {
                res |= (1 << i);
                a = minus(a, b << i);
            }
        }
        return n1 < 0 ^ n2 < 0 ? plus(~res, 1) : res;
    }
}
```