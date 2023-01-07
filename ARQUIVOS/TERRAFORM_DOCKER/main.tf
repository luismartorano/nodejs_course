terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.23.1"
    }
  }
}

provider "docker" {}

resource "docker_image" "node-app" {
  name         = var.docker_image
  keep_locally = true
}

resource "docker_container" "node-app" {
  name  = var.container_name
  image = docker_image.node-app.image_id

  ports {
    internal = 3000
    external = 3000
  }
}

output "container_name" {
  value = docker_container.node-app.name
}
