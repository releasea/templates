FROM rust:1.79 as build
WORKDIR /app
COPY Cargo.toml ./
RUN cargo fetch
COPY src ./src
RUN cargo build --release

FROM debian:bookworm-slim
WORKDIR /app
COPY --from=build /app/target/release/rust-axum ./server
ENV PORT=8080
EXPOSE 8080
CMD ["./server"]
