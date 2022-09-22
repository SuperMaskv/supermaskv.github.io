# day 7

## 合并K个升序链表

[合并K个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/)

相比合并2个升序链表，合并K个升序链表的难度在于快速在K个候选中选择最小值，可以借助PriorityQueue的O(long(n))快速排序达到目的。

[合并2个升序链表](/algorithm/day5.html#合并两个有序链表)

```java
public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    PriorityQueue<ListNode> heap = new PriorityQueue<>((n1, n2) -> n1.val - n2.val);
    for (ListNode list : lists) {
        if (list != null) heap.add(list);
    }
    if (heap.isEmpty()) return null;
    ListNode head = heap.poll();
    ListNode pre = head;

    if (pre.next != null) {
        heap.add(pre.next);
    }
    while (!heap.isEmpty()) {
        pre.next = heap.poll();
        pre = pre.next;
        if (pre.next != null) heap.add(pre.next);
    }

    return head;
}
```