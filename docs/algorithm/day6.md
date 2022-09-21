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
- (a&b)>>1 等于a和b的进位信息

```java

```