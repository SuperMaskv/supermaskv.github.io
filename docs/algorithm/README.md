# 算法

## ACM 风格最佳实践

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