# --- POSTGRES

docker run --name postgres -e POSTGRES_USER=mrnobody -e POSTGRES_PASSWORD=sosecure -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

# --- ADMINER

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

# --- MONGODB

docker run --name mongodb  -p 27017:27017 -e MONGO_INITDD_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=sosecure -d mongo:4

# --- MONGOCLIENT

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

## --- Criar usuário mongodb 
docker exec -it mongodb mongo --host localhost -u admin -p sosecure --authenticationDatabase admin --eval "db.getSiblingDB('heroes').createUser({user: 'thiagotesla', pwd: 'sosecure', roles: [{role: 'readWrite', db: 'heroes'}]})"

