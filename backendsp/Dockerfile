# Java 17 の軽量イメージをベースにする
FROM openjdk:17-jdk-slim

# jarファイルをコンテナにコピー（build後にtargetに生成される）
COPY target/*.jar app.jar

# アプリケーションを実行する
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Spring Boot のデフォルトポート
EXPOSE 8080
