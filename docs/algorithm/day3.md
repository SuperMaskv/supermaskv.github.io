# day 3

## 反转单向链表

```java
public class Q1 {
    /**
     * reverse a singly linked list
     */
    private static class Node {
        int value;
        Node next;

        public Node(int value) {
            this.value = value;
        }
    }

    private static Node reverseSinglyLinkedList(Node head) {
        Node pre = null;
        Node next = null;
        while (head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
}
```

## 反转双向链表

```java
public class Q2 {
    /**
     * reverse a two-way linked list
     */
    private static class Node {
        int value;
        Node pre;
        Node next;
    }

    private static Node reverseTwoWayLinkedList(Node head) {
        Node pre = null;
        Node next = null;
        while (head != null) {
            next = head.next;
            head.next = pre;
            head.pre = next;
            pre = head;
            head = next;
        }
        return pre;
    }
}
```