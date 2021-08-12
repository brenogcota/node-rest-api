# Rest API with Node.js, Express, PostgreSQL e Jest

## this project is part of Rodrigo Brannas' youtube video series


### run

➜  api git:(master) ✗ sudo -u breno psql postgres   
psql (12.7 (Ubuntu 12.7-0ubuntu0.20.04.1))
Type "help" for help.

postgres=#                                                       
```sql
create schema   blog;          
create table blog.post (                                                
   id serial primary key,                                                
   title text not null,                                                  
   content text not null,                                                
   date timestamp default now()                                          
);
```

```sh
➜  api git:(master) ✗ node server/server.js
```

```sh
➜  api git:(master) ✗ node test
PASS  server/test/posts.test.js
  ✓ Should get posts

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.279 s
Ran all test suites.
```