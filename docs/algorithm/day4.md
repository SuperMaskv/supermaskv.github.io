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