# Introductoion

A simple laravel demo app built with laravel & vuejs created on Laravel sail
https://github.com/tookit/demoTask.git



## Function

- A simple auth with jwt
- Task curd API
- Project curd API


# Requiriement

- php ^ 7.4
- mysql ^ 5.7
- composer ^ 2.0 
- npm

# How to start ?

## using laravel sail (docker)

- Install dependency with composer
  

  ```
    composer install
  ```

- modify the env by your need

- Run laravel sail
  
  ```
    ./vendor/bin/sail up -d

  ```

- generate App Key / Jwt key
  
  App key

  ```
    ./vendor/bin/sail artisan key:generate
    
  ```


  JWT key 
  
  ```
    ./vendor/bin/sail artisan jwt:secret
    
  ```  
- Run migration and seed data

```
    ./vendor/bin/sail artisan migrate
```

```
    ./vendor/bin/sail artisan db:seed
```





By default, if no port conflict,  access http://127.0.0.1/, have fun.

- default demo user /admin/admin


