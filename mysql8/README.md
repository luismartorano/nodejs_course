DOCKER RUN

docker create network dev-network

docker run --restart always --name mysql8.0 --net dev-network -v /home/luismartorano/nodejs_curso/mysql8/mysql_data/8.0:/var/lib/mysql -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=martorano123 mysql:latest mysqld --default-authentication-plugin=mysql_native_password
