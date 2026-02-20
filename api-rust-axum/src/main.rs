use axum::{routing::get, Json, Router};
use serde::Serialize;
use std::net::SocketAddr;
use std::env;

#[derive(Serialize)]
struct StatusResponse {
    status: &'static str,
}

async fn root() -> Json<StatusResponse> {
    Json(StatusResponse { status: "ok" })
}

async fn healthz() -> Json<StatusResponse> {
    Json(StatusResponse { status: "healthy" })
}

#[tokio::main]
async fn main() {
    let port: u16 = env::var("PORT")
        .ok()
        .and_then(|value| value.parse().ok())
        .unwrap_or(8080);

    let app = Router::new()
        .route("/", get(root))
        .route("/healthz", get(healthz));

    let addr = SocketAddr::from(([0, 0, 0, 0], port));
    axum::serve(tokio::net::TcpListener::bind(addr).await.unwrap(), app)
        .await
        .unwrap();
}
