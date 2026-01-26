BÁO CÁO THỰC HÀNH
KIỂM THỬ TỰ ĐỘNG END-TO-END VỚI CYPRESS
1. Thông tin sinh viên

Họ và tên: Bui Quang Trung Hieu

Ngành học: Công nghệ Thông tin (CNTT)

Môn học: Kiểm thử phần mềm

2. Mục tiêu bài thực hành

Mục tiêu của bài thực hành là giúp sinh viên hiểu và thực hành kiểm thử tự động End-to-End (E2E) bằng công cụ Cypress. Thông qua bài tập này, sinh viên có thể:

Làm quen với Cypress và cách cài đặt trong dự án Node.js

Viết và chạy các kịch bản kiểm thử E2E cho một website mẫu

Hiểu quy trình kiểm thử các chức năng phổ biến của một ứng dụng web như đăng nhập, giỏ hàng và thanh toán

3. Công cụ và môi trường sử dụng

Node.js (phiên bản 14 trở lên)

npm (Node Package Manager)

Visual Studio Code

Cypress

Website kiểm thử: https://www.saucedemo.com

Hệ điều hành: Windows

4. Cài đặt Cypress

Các bước cài đặt Cypress được thực hiện như sau:

Tạo thư mục dự án và khởi tạo npm

Cài đặt Cypress bằng npm

Mở Cypress lần đầu để tạo cấu trúc thư mục

Sau khi hoàn thành, Cypress tự động tạo thư mục cypress/ và các file cấu hình cần thiết.

5. Các kịch bản kiểm thử đã thực hiện
5.1. Kịch bản 1: Kiểm tra đăng nhập thành công

Người dùng truy cập trang web

Nhập thông tin đăng nhập hợp lệ

Xác minh chuyển hướng đến trang danh sách sản phẩm

Kết quả: Đăng nhập thành công, hệ thống chuyển sang trang inventory.

5.2. Kịch bản 2: Kiểm tra đăng nhập thất bại

Người dùng nhập thông tin đăng nhập không hợp lệ

Xác minh hiển thị thông báo lỗi

Kết quả: Hệ thống hiển thị thông báo lỗi đúng như mong đợi.

5.3. Kịch bản 3: Thêm sản phẩm vào giỏ hàng

Người dùng đăng nhập thành công

Thêm sản phẩm đầu tiên vào giỏ hàng

Kiểm tra số lượng sản phẩm trong giỏ

Kết quả: Số lượng sản phẩm trong giỏ tăng lên 1.

5.4. Kịch bản 4: Sắp xếp sản phẩm theo giá

Người dùng chọn bộ lọc "Price (low to high)"

Kiểm tra sản phẩm có giá thấp nhất hiển thị đầu tiên

Kết quả: Danh sách sản phẩm được sắp xếp đúng.

5.5. Kịch bản 5: Xóa sản phẩm khỏi giỏ hàng

Thêm sản phẩm vào giỏ

Nhấn nút Remove

Kiểm tra giỏ hàng trống

Kết quả: Sản phẩm được xóa thành công khỏi giỏ hàng.

5.6. Kịch bản 6: Quy trình thanh toán

Đăng nhập

Thêm sản phẩm vào giỏ

Tiến hành thanh toán và nhập thông tin người dùng

Xác minh chuyển sang trang xác nhận thanh toán

Kết quả: Người dùng được chuyển sang trang checkout-step-two.

6. Kết quả thực hiện

Tất cả các kịch bản kiểm thử đều chạy thành công

Cypress ghi lại video và screenshot trong quá trình chạy test

Không phát sinh lỗi nghiêm trọng

7. Nhận xét và đánh giá

Cypress là công cụ mạnh mẽ và dễ sử dụng cho kiểm thử E2E

Giao diện trực quan, dễ theo dõi quá trình chạy test

Phù hợp cho việc kiểm thử tự động các ứng dụng web hiện đại

8. Kết luận

Thông qua bài thực hành này, sinh viên đã nắm được cách cài đặt và sử dụng Cypress để kiểm thử tự động End-to-End. Việc áp dụng Cypress giúp tiết kiệm thời gian kiểm thử, nâng cao chất lượng phần mềm và giảm lỗi trong quá trình phát triển ứng dụng.

9. Tài liệu tham khảo

Cypress Documentation

https://www.saucedemo.com