# day 5

## 两数相加

[两数相加](https://leetcode.cn/problems/add-two-numbers/)

```java
public class Q1 {
    /**
     * https://leetcode.com/problems/add-two-numbers/
     */
    private static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int len1 = len(l1);
        int len2 = len(l2);
        ListNode lCur = len1 > len2 ? l1 : l2;
        ListNode sCur = len1 > len2 ? l2 : l1;
        ListNode last = null;
        int carry = 0;
        while (sCur != null) {
            int curNum = lCur.val + sCur.val + carry;
            lCur.val = curNum % 10;
            carry = curNum / 10;
            last = lCur;
            lCur = lCur.next;
            sCur = sCur.next;
        }
        while (lCur != null) {
            int curNum = lCur.val + carry;
            lCur.val = curNum % 10;
            carry = curNum / 10;
            last = lCur;
            lCur = lCur.next;
        }
        if (carry != 0) {
            last.next = new ListNode(1);
        }
        return len1 > len2 ? l1 : l2;
    }

    private int len(ListNode head) {
        int size = 0;
        while (head != null) {
            size++;
            head = head.next;
        }
        return size;
    }
}
```


## 合并两个有序链表

[合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)

当两个链表指针其中一个指向null，需要把pre.next指向另一个链表指针。

![q2](/images/algorithm/day5/q2.jpg)

```java
public class Q2 {
    /**
     * https://leetcode.cn/problems/merge-two-sorted-lists/
     */
    private static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null || list2 == null) {
            return list1 == null ? list2 : list1;
        }
        ListNode head = list1.val < list2.val ? list1 : list2;
        ListNode pre = head;
        ListNode cur1 = head.next;
        ListNode cur2 = head == list1 ? list2 : list1;
        while (cur1 != null && cur2 != null) {
            if (cur1.val < cur2.val) {
                pre.next = cur1;
                cur1 = cur1.next;
            } else {
                pre.next = cur2;
                cur2 = cur2.next;
            }
            pre = pre.next;
        }
        pre.next = cur1 == null ? cur2 : cur1;
        return head;
    }
}
```