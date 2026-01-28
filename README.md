# Báo cáo thực hành Kiểm thử phần mềm
## 1. Giới thiệu
Trong khuôn khổ môn học Kiểm thử phần mềm, em đã sử dụng phần mềm Can’t Unsee như một công cụ hỗ trợ nhằm đánh giá khả năng phát hiện lỗi giao diện người dùng (UI bugs) và sự khác biệt trong thiết kế.
Công cụ này giúp mô phỏng quá trình kiểm thử giao diện thủ công, từ đó rèn luyện kỹ năng quan sát, phân tích và phản xạ của người kiểm thử.

---

## 2. Kết quả thực hiện bài kiểm thử

### Thông tin kết quả
- Điểm đạt được: 7,630
- Xếp hạng: Platinum (Top 5% người dùng)
- Thời gian hoàn thành: 00:06:33
Kết quả trên cho thấy em có khả năng phát hiện sự không nhất quán trong giao diện người dùng với độ chính xác cao và thời gian xử lý nhanh, đáp ứng tốt các tiêu chí của bài thực hành kiểm thử.

---

## 3. Phân tích dưới góc độ Kiểm thử phần mềm

Phần mềm Can’t Unsee mô phỏng quá trình **kiểm thử giao diện thủ công (Manual UI Testing), trong đó người dùng cần thực hiện các hoạt động sau:

- So sánh các thành phần giao diện để phát hiện sai lệch
- Kiểm tra tính nhất quán (Consistency) về:
  - Màu sắc  
  - Kích thước  
  - Vị trí  
- Đánh giá khả năng quan sát và phản xạ của người kiểm thử

Việc đạt xếp hạng Platinum cho thấy kỹ năng kiểm thử trực quan và mức độ tập trung của em ở mức tốt so với số lượng lớn người tham gia.

---

## 4. Kỹ năng đạt được

Thông qua bài thực hành này, em đã rèn luyện và nâng cao được các kỹ năng quan trọng trong lĩnh vực Công nghệ thông tin và Kiểm thử phần mềm, bao gồm:

- Kỹ năng phát hiện lỗi giao diện người dùng
- Tư duy phân tích và so sánh chi tiết
- Tăng khả năng tập trung và giảm sai sót trong kiểm thử thủ công
- Làm quen với quy trình đánh giá chất lượng phần mềm ở mức cơ bản

---

## 5. Kết luận

Bài thực hành giúp em hiểu rõ hơn vai trò của **kiểm thử giao diện người dùng trong quá trình phát triển phần mềm, đồng thời nâng cao kỹ năng cần thiết của một kiểm thử viên trong môi trường thực tế.
Kết quả chứng minh ở hình ảnh ở cùng link
<img width="701" height="402" alt="image" src="https://github.com/user-attachments/assets/e314a193-1693-48a4-9a70-45d29da8ddb5" />



BÀI ĐỌC THÊM 4 KIỂM THỬ BẰNG JMERTER
# JMeter Performance Testing Report

## Target website
- https://www.wikipedia.org

## Test environment
- Tool: Apache JMeter 5.6.3
- OS: Windows
- Test date: 28/01/2026

## Test scenarios

### TG1_Basic
- Users: 10
- Loop count: 5
- Request: GET /

Results:
- Avg Response Time: 697 ms
- Throughput: 1.6 req/sec
- Error Rate: 0.55 %

---

### TG2_Heavy
- Users: 50
- Ramp-up: 30s
- Requests:
  - GET /
  - GET /wiki/Main_Page

Results:
- Avg Response Time: 1025 ms
- Throughput: 1.2 req/sec
- Error Rate: 0.58 %

---

### TG3_Custom_60s
- Users: 20
- Duration: 60s
- Requests:
  - GET /wiki/Software_testing
  - GET /wiki/Apache_JMeter

Results:
- Avg Response Time: 852 ms (SoftwareTesting)
- Avg Response Time: 411 ms (ApacheJMeter)
- Throughput: 14.9 req/sec
- Error Rate: 0.43 % (SoftwareTesting)
- Error Rate: 0.27 % (ApacheJMeter)

---

## Overall Results (Combined)
- Avg Response Time (TOTAL): 650 ms
- Throughput (TOTAL): 32.5 req/sec
- Error Rate (TOTAL): 0.37 %

---

## Analysis & Conclusion
- Khi tăng số lượng người dùng (TG2), thời gian phản hồi trung bình tăng lên rõ rệt so với TG1.
- TG3 cho thấy hệ thống có thể xử lý lưu lượng ổn định trong 60 giây với throughput cao.
- Tỷ lệ lỗi dưới 1% cho thấy hệ thống hoạt động tương đối ổn định dưới tải.
- Website Wikipedia đáp ứng tốt với các kịch bản kiểm thử cơ bản và tải trung bình.

## Files
- plans/perf_test.jmx
- results/tg1.csv
- results/tg2.csv
- results/tg3.csv

- Ảnh minh chứng
- <img width="987" height="845" alt="Ảnh chụp màn hình 2026-01-28 124328" src="https://github.com/user-attachments/assets/281cc47d-f5ae-4b1d-9371-96fe3424c596" />
