#172.17.0.3
docker container run -itd --name c1 alpine

#
docker container run -itd --name c2 alpine

docker container exec c1 ping 172.17.0.2

docker inspect c1

docker network ls
docker network create --subnet 192.168.1.0/24 mybridge
docker network rm mybridge

docker network create --subnet 192.168.1.0/24 --driver bridge mybridge

#c1 - 172.17.0.3
#c2 - 172.17.0.5
#c3 - 192.168.1.2
#c4 - 192.168.1.3

docker container exec c1 ping c2
docker container exec c2 ping c1
docker container exec c3 ping c4
docker container exec c4 ping c3
docker container exec c4 ping c1
docker container exec c3 ping c1

docker container exec 172.17.0.3 ping 172.17.0.5
docker container exec 172.17.0.5 ping 172.17.0.3
docker container exec 192.168.1.2 ping 192.168.1.3
docker container exec 192.168.1.3 ping 192.168.1.2

docker inspect bridge

docker network disconnect bridge c1
docker network connect mybridge c1

docker container run -itd -p 8081:80 --name httpd httpd
docker container run -itd -p 8082:80 --name httpd1 httpd
docker container run -itd -p 8083:80 --name httpd2 httpd

docker inspect httpd1
docker container run --name httpd-1 --network host -itd httpd
docker container run --name httpd-2 --network host -itd httpd
docker container run --name httpd-3 --network host -itd httpd

docker container logs httpd-2

docker build -t mynode .
docker container run -itd mynode --name mynode

docker image build -t pyhon .
docker container run -itd python --name python

docker-compose up
docker-compose up -d
docker-compose down
docker-compose down --rmi all