# Node Authentication 

## Routes

1. /users/signup :

creates a new user in the database and recieves a token.

###### Request
Method:POST

```
{
	"email":"ashish9342@gmail.com",
	"password": "ashish@1234"
}

```

###### Response

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBc2hpc2giLCJzdWIiOiI1ZDg4NWNjNmJjZTQ4MTRjMTJjNTcxNWIiLCJpYXQiOjE1NjkyMTc3MzQyODAsImV4cCI6MTU2OTMwNDEzNDI4MH0.VJ0TMiMXD77JYrVQNqZ4IPTMv4iH42tHCNOi6aOJiSY"
}
```

2. /users/signin
Method:POST


###### Request

```
{
	"email":"ashish9342@gmail.com",
	"password": "ashish@1234"
}

```

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBc2hpc2giLCJzdWIiOiI1ZDg4NWNjNmJjZTQ4MTRjMTJjNTcxNWIiLCJpYXQiOjE1NjkyMTc3MzQyODAsImV4cCI6MTU2OTMwNDEzNDI4MH0.VJ0TMiMXD77JYrVQNqZ4IPTMv4iH42tHCNOi6aOJiSY"
}

3. /users/secret
Method:GET


README.md
