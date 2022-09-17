# day 4

## 用单链表实现队列和栈

```java
public class Q1 {
    /**
     * implement queue and stack using singly linked list
     */
    private static class Node<V> {
        V value;
        Node<V> next;

        public Node(V value) {
            this.value = value;
            this.next = null;
        }
    }

    private static class Queue<V> {
        Node<V> head;
        Node<V> tail;
        int size;

        public Queue() {
            head = null;
            tail = null;
            size = 0;
        }

        public boolean isEmpty() {
            return size == 0;
        }

        public int size() {
            return this.size;
        }

        public void offer(V value) {
            Node<V> newNode = new Node<>(value);
            if (tail == null) {
                head = newNode;
                tail = newNode;
            } else {
                tail.next = newNode;
                tail = tail.next;
            }
            this.size++;
        }

        public Node<V> poll() {
            Node<V> ans = null;

            if (head != null) {
                ans = head;
                head = head.next;
                this.size--;
            }
            // set tail to null if head turn to null
            if (head == null) {
                tail = null;
            }

            return ans;
        }

        public Node<V> peek() {
            return head;
        }
    }

    private static class Stack<V> {
        Node<V> head;
        int size;

        public Stack() {
            this.head = null;
            this.size = 0;
        }

        public int size() {
            return this.size;
        }

        public boolean isEmpty() {
            return this.size == 0;
        }

        public void push(V value) {
            Node<V> newNode = new Node<V>(value);
            if (head != null) {
                newNode.next = head;
            }
            head = newNode;
            size++;
        }

        public V pop() {
            V ans = null;
            if (head != null) {
                ans = head.value;
                head = head.next;
                this.size--;
            }
            return ans;
        }

        public V peek() {
            return head != null ? head.value : null;
        }

    }
}
```

## 使用双向链表实现双端队列

```java
public class Q2 {
    /**
     * implement a dequeue using two-way linked list
     */
    private static class Node<V> {
        V value;
        Node<V> next;
        Node<V> last;

        public Node(V value) {
            this.value = value;
            this.next = null;
            this.last = null;
        }
    }

    private static class MyDequeue<V> {
        int size;
        Node<V> head;
        Node<V> tail;

        public MyDequeue() {
            this.size = 0;
            this.head = null;
            this.tail = null;
        }

        public boolean isEmpty() {
            return size == 0;
        }

        public int size() {
            return size;
        }

        public void pushHead(V value) {
            Node<V> node = new Node<>(value);
            if (head == null) {
                head = node;
                tail = node;
            } else {
                node.next = head;
                head.last = node;
                head = node;
            }
            size++;
        }

        public void pushTail(V value) {
            Node<V> node = new Node<>(value);
            if (tail == null) {
                head = node;
                tail = node;
            } else {
                node.last = tail;
                tail.next = node;
                tail = node;
            }
            size++;
        }

        public V pollHead() {
            V ans = null;
            if (head == null) {
                return ans;
            }
            size--;
            ans = head.value;
            if (head == tail) {
                head = null;
                tail = null;
            } else {
                head = head.next;
                head.last = null;
            }
            return ans;
        }

        public V pollTail() {
            V ans = null;
            if (tail == null) {
                return ans;
            }
            size--;
            ans = tail.value;
            if (head == tail) {
                head = null;
                tail = null;
            } else {
                tail = tail.last;
                tail.next = null;
            }
            return ans;
        }

        public V peekHead() {
            return head == null ? null : head.value;
        }

        public V peekTail() {
            return tail == null ? null : tail.value;
        }
    }
}
```


## K 个一组翻转链表

 [K 个一组翻转链表 Leetcode](https://leetcode.cn/problems/reverse-nodes-in-k-group/)

 ```java
public class Q3 {
    /**
     * https://leetcode.cn/problems/reverse-nodes-in-k-group/
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

    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode start = head;
        ListNode end = getKGroupEnd(start, k);
        if (end == null) {
            return head;
        }
        head = end;
        reverse(start, end);
        ListNode lastEnd = start;
        while (lastEnd.next != null) {
            start = lastEnd.next;
            end = getKGroupEnd(start, k);
            if (end == null) {
                return head;
            }
            reverse(start, end);
            lastEnd.next = end;
            lastEnd = start;
        }
        return head;
    }

    public ListNode getKGroupEnd(ListNode start, int k) {
        while (--k != 0 && start != null) {
            start = start.next;
        }
        return start;
    }

    public void reverse(ListNode start, ListNode end) {
        end = end.next;
        ListNode pre = null;
        ListNode next = null;
        ListNode cur = start;
        while (cur != end) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        start.next = end;
    }
}
 ```