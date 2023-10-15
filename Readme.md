# Welcome to [BlogSphere]()

### BlogSphere is a APIs server for blogs related.

## [Folder Tree Structure]()

```bash
.
|── constants
|	|── Response.js
|	|── Status.js
|
|── controllers
|	|── blog
|	|── user
|		|── AddUser.js
|		|── ForgetPassword.js
|		|── GetProfile.js
|		|── LoginUser.js
|		|── UpdatePassword.js
|		|── UpdateProfile.js
|		|── VerifyUser.js
|
|── libs
|	|── FetchData.js
|	|── HashPassword.js
|	|── JwtToken.js
|	|── UploadImage.js
|
|── middleware
|	|── ConnectDB.js
|	|── HeaderMiddleware.js
|	|── multer.js
|
|── models
|	|── userModel.js
|
|── routes
|	|── userRoute.js
|
|── SendMail
|	|── UpdateSendLink.js
|	|── VerifySendMail.js
|
|── .gitignore
|── config.js
|── firebaseconfig.js
|── index.js
|── package-lock.json
|── package.json
|── Readme.md
|── vercel.json

```

## [User Routes]() ( /user )

This is UserRoute for Adding, Update, and Deleting User account

### Post [/user/create]()

-   [x] This route add a new user if user does not exists.if user already exists then thorw response message

### Required Body Data :

| Key      | Type   | Example          |
| :------- | :----- | :--------------- |
| username | String | Username         |
| email    | String | username@dev.com |
| password | String | 123456           |

### Status Response :

| Status       | Code |
| :----------- | :--- |
| Created      | 201  |
| Server Error | 500  |
| Exist        | 403  |

## [Blog Routes]() ( /blog )

## [Comment Routes]() ( /comment )

-   [x] done
