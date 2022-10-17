# Social Media 

## Giới thiệu các chức năng chính
 
- Social Media website sử dụng MongoDB, Expressjs, Reactjs và Nodejs
- Người dùng có thể đăng kí tài khoản, đăng nhập
- Người dùng có thể thêm thông tin, cập nhật lại thông tin cá nhân của mình
- Người dùng có thể đăng bài viết, đăng ảnh, thả tim, theo dõi người dùng khác
- Người dùng có thể nhắn tin realtime với người dùng khác

## Công nghệ sử dụng

- Node.js
- MongoDB
- Express
- Multer: để upload ảnh
- Jsonwebtoken: để xác thực người dùng
- Redux: quản lý state
....

## Demo
- User test hoặc đăng kí tài khoản mới
```
kimquan2000vn
10122000
```
- Trang đăng kí:
![image](https://user-images.githubusercontent.com/54978467/196160865-77e57e98-fade-4830-a294-2759d2ef762c.png)
- Trang đăng nhập:
![image](https://user-images.githubusercontent.com/54978467/196160904-ce28006f-a518-4853-9dc3-a6d59af4fd77.png)
- Hone Page
![image](https://user-images.githubusercontent.com/54978467/196153330-6b6ad0cb-1214-4d78-b08f-8a0db1d16e8c.png)
- Profile Page
![image](https://user-images.githubusercontent.com/54978467/196153300-4321e9f7-df5c-47b8-a035-63068ab8620c.png)
- Chat realtime page
![image](https://user-images.githubusercontent.com/54978467/196153483-a1798b19-0c01-4e35-acaf-42f16377faf8.png)
- Modal update profile
![image](https://user-images.githubusercontent.com/54978467/196154149-286b3761-e6c8-4192-a2cf-2b60e5972630.png)

## Chạy ứng dụng
1. Clone project 
2. Mở project bằng Visual Studio Code
3. Vào thư mục server tạo file .env gồm:
```
MONGO_DB = "link database của bạn"
PORT = 5000
JWTKEY = "bất kì từ nào bạn muốn"
 ```
 4. Vào thư mục client tạo file .env 
 ```REACT_APP_PUBLIC_FOLDER = http://localhost:5000/images/```
 5. Vào thư mục client để khởi chạy client 
 ``` 
 yarn install
 yarn start
 ```
 6. Vào thư mục server và socket thực hiện các câu lệnh
 ```
 npm install
 npm start
 ```
