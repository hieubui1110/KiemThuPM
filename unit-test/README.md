BÀI TẬP KIỂM THỬ ĐƠN VỊ VỚI JUNIT

MÔ TẢ BÀI TOÁN

Bài tập yêu cầu xây dựng một chương trình Java để phân tích danh sách điểm số học sinh và viết kiểm thử đơn vị (Unit Test) bằng JUnit 5.

Chương trình gồm lớp StudentAnalyzer với hai phương thức chính. Phương thức countExcellentStudents(List<Double> scores) dùng để đếm số học sinh đạt loại Giỏi với điểm từ 8.0 trở lên. Các điểm nhỏ hơn 0 hoặc lớn hơn 10 được xem là không hợp lệ và bị loại bỏ khỏi quá trình xử lý. Nếu danh sách điểm rỗng, phương thức trả về giá trị 0.

Phương thức calculateValidAverage(List<Double> scores) dùng để tính điểm trung bình của các điểm hợp lệ trong khoảng từ 0 đến 10. Các điểm không hợp lệ không được đưa vào tính toán. Trong trường hợp không có điểm hợp lệ, kết quả trả về là 0.

MỤC TIÊU BÀI TẬP

Mục tiêu của bài tập là giúp sinh viên hiểu và áp dụng kiểm thử đơn vị trong phát triển phần mềm Java. Thông qua bài tập, sinh viên có thể thiết kế các ca kiểm thử cho nhiều tình huống khác nhau như trường hợp bình thường, trường hợp biên và trường hợp dữ liệu không hợp lệ. Đồng thời, sinh viên được làm quen với quy trình quản lý mã nguồn và công việc bằng GitHub Issues và Commit.

CẤU TRÚC THƯ MỤC DỰ ÁN

Dự án được tổ chức trong thư mục unit-test với cấu trúc như sau:

– Thư mục src chứa mã nguồn Java, bao gồm file StudentAnalyzer.java.
– Thư mục test chứa các mã nguồn kiểm thử đơn vị, bao gồm file StudentAnalyzerTest.java.
– File README.md dùng để mô tả bài toán và hướng dẫn thực hiện bài tập.

KIỂM THỬ ĐƠN VỊ

Các ca kiểm thử được xây dựng nhằm đảm bảo các phương thức trong lớp StudentAnalyzer hoạt động chính xác với nhiều loại dữ liệu đầu vào.

Các trường hợp kiểm thử chính bao gồm:
– Danh sách có cả điểm hợp lệ và không hợp lệ.
– Danh sách rỗng.
– Danh sách chỉ chứa các giá trị biên như 0 hoặc 10.
– Danh sách chứa điểm nhỏ hơn 0 hoặc lớn hơn 10.

Ví dụ, với danh sách điểm gồm 9.0, 8.5, 7.0, 11.0 và -1.0, phương thức đếm số học sinh giỏi sẽ trả về kết quả là 2.

QUẢN LÝ CÔNG VIỆC VỚI GITHUB

Trong quá trình thực hiện bài tập, công việc được chia thành các GitHub Issues để quản lý tiến độ, bao gồm:

Issue 1: Cài đặt phương thức countExcellentStudents.
Issue 2: Cài đặt phương thức calculateValidAverage.
Issue 3: Viết các ca kiểm thử đơn vị cho hai phương thức.
Issue 4: Viết tài liệu README báo cáo bài tập.

Mỗi công việc được gắn với các commit tương ứng, giúp dễ dàng theo dõi lịch sử thay đổi và tiến trình thực hiện.

HƯỚNG DẪN CHẠY CHƯƠNG TRÌNH VÀ KIỂM THỬ

Dự án có thể được mở và chạy bằng các môi trường phát triển Java phổ biến như IntelliJ IDEA, Eclipse hoặc NetBeans.

Để chạy kiểm thử đơn vị, sinh viên có thể chạy trực tiếp file StudentAnalyzerTest.java trong IDE hoặc sử dụng Maven với lệnh mvn test.

KẾT LUẬN

Thông qua bài tập này, sinh viên đã thực hành xây dựng chương trình Java có kiểm tra dữ liệu đầu vào, viết kiểm thử đơn vị bằng JUnit và áp dụng quy trình làm việc với GitHub trong phát triển phần mềm. Bài tập góp phần nâng cao kỹ năng lập trình, kiểm thử và quản lý mã nguồn.

TÀI LIỆU THAM KHẢO

JUnit 5 User Guide: https://junit.org/junit5/docs/current/user-guide/