FROM golang:1.22-alpine AS build
WORKDIR /app
COPY go.mod ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -mod=mod -o server main.go

FROM alpine:3.20
WORKDIR /app
COPY --from=build /app/server ./server
ENV PORT=8080
EXPOSE 8080
CMD ["./server"]
