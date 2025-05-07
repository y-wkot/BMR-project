## Dockerfile for Spring Boot (Maven)
#FROM eclipse-temurin:17-jdk-alpine
#VOLUME /tmp
#ARG JAR_FILE=target/*.jar
#COPY ${JAR_FILE} app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]



# --- 第一ステージ: ビルド ---
FROM maven:3.9.5-eclipse-temurin-17-alpine AS build
WORKDIR /app

# プロジェクトファイルをすべてコピー
COPY . .

# テストはスキップして jar をビルド
RUN mvn clean package -DskipTests

# --- 第二ステージ: 実行環境 ---
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# ビルドステージから jar をコピー（target の名前は自動検出）
COPY --from=build /app/target/*.jar app.jar

# アプリを起動
ENTRYPOINT ["java", "-jar", "app.jar"]
