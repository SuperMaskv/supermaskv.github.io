<iframe
  :src="$withBase('/markmap/back-end/Java-Base-Interview.html')"
  width="1000"
  height="1000"
  frameborder="0"
  scrolling="No"
  leftmargin="0"
  topmargin="0"
/>

# Java 基础面试

## JavaSE

### 初阶

- 基本认识
- 数据类型
- 运算符
- 流程控制
- 方法定义、调用、重载、重写
- 数组

### 中阶

- 面向对象
  - 多态 
  - 封装 访问控制
  - 继承
- 异常
  - 异常的体系
    - Error
    - Exception
      - RuntimeException
      - IOException
      - ...
  - 异常的定义
  - 异常的处理
- 常用类
  - 包
    - java.util
    - java.io
    - JUC
- 集合
  - 结构划分
    - Collection 单列集合
      - List
      - Set
        - HashSet
        - TreeSet
    - Map 双列集合
      - HashTable
      - HashMap
      - TreeMap
  - 线程是否安全
    - 线程安全
      - HashTable
      - Vector
    - 线程不安全
    
- **IO 流**
  - 字节流
    - InputStream
    - OutputStream
      - FileOutputStream
      - ByteArrayOutputStream
      - Object
      - Filter
  - 字符流
    - Writer
    - Reader
- 多线程
  - 创建线程
  - 基本应用
  - 状态转换及常用方法
  - 线程安全及锁
- 网络通信
  - 协议
  - IO模型
    - BIO
    - NIO
    - AIO
    - Select
    - Poll
    - Epoll
  - 五层网络模型

### 高阶

- 注解 枚举
- 反射
- 新特性
  - lambda
  - 接口增强
  - 函数式接口
  - 方法引用
  - Stream
  - Optional
  - 日期和时间

## DB

- MySQL
 - SQL 查询
- JDBC

## 前端

## 工具

- IDEA
- Git
- Maven
- Groovy
- Linux

## 框架

- Spring
  - IOC
    - 生命周期
      - 加载配置
        - web.xml
        - Annotation
      - 初始化 `init()`
      - 创建容器
      - 创建 Bean 放入容器
      - 赋值 DI
      - 销毁
    - 注解
    - 设计模式
    - 事务
  - AOP
    - 专业名词
      - 连接点
      - 切面
      - 切点
      - 通知
        - before
        - after
        - around
      - 目标
      - 织入
  - 创建
    - 构造器
    - setter
    - 注解 @Bean
- SpringMVC
  - 生命周期
    - 请求
    - DispatchServlet
    - HandlerMapping
    - HandlerAdaptor
    - ModelAndView
    - Controller
    - ViewResovler
    - View
- Mybatis
  - 工作流程
    - 解析配置
    - SqlSessionFactoryBuilder
    - SqlSessionFactory
    - SqlSession
    - Transaction
    - Executor
- Spring Boot
  - 自动装配
    - 核心注解配置类 @EnableAutoConfiguration
    - META-INF/spring.factories
    - 加载 去重 exclude excludedName
    - 过滤 自动配置返回
  - starter
    - 定义
    - 原理
- Spring Data
- Spring Cloud
  - 注册中心
  - 路由
  - 负载均衡
  - 链路追踪
  - 熔断降级
  - 配置中心
  - 网关


## 中间件

### MySQL

### NoSQL

- Redis
  - 应用场景
  - 基本类型
    - string
    - list
    - set
    - zset
    - hash
  - 数据结构
    - string SDS
    - list ziplist quicklist
    - hash dict
    - set intset hash
    - zset skiplist
  - 持久化
    - RDB
    - AOF
  - 淘汰策略
    - 概念
    - 算法
      - LRU
      - LFU
  - 过期策略
    - 主动
    - 被动
  - 分布式锁
  - 穿透
  - 雪崩
  - 击穿
  - 哨兵
  - 主从
  - 集群
- MongoDB

### MQ

- Kafka

## 进阶加分

- 高性能调优
  - MySQL
    - 整体架构
    - 存储引擎
    - 执行流程
    - 索引
    - 事务和锁 MVCC
    - 优化
    - 主从读写分离
    - 集群
  - JVM
    - 加载流程
    - 内存分区
    - 垃圾回收算法
    - 垃圾回收器
  - 网络 IO
  - 集群
  - 搜索
  - 安全
  - 容器化
  - 云原生
- 数据结构与算法
- 原理源码
- 项目实战
