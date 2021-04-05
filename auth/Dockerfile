FROM golang:alpine as builder

# Working director inside Docker container
WORKDIR /go/src/app

# Enable GO111 modules
ENV GO111MODULE=on

# Install module use to hot reload go code in container
RUN go get github.com/cespare/reflex

# Copy over dependencies list
COPY go.mod .
COPY go.sum .

# Install dependencies
RUN go mod download

# Copy over all the code into WORKDIR
COPY . .

# Build the package
RUN go build -o ./run .

# Production
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/

COPY --from=builder /go/src/app/run .

EXPOSE 8080
CMD ["./run"]