import java.util.List;

public class StudentAnalyzer {
    // Hàm đếm học sinh giỏi (điểm từ 8.0 đến 10.0)
    public int countExcellentStudents(List<Double> grades) {
        if (grades == null) return 0;
        return (int) grades.stream()
                .filter(g -> g >= 8.0 && g <= 10.0)
                .count();
    }

    // Hàm tính trung bình các điểm hợp lệ (0.0 đến 10.0)
    public double calculateValidAverage(List<Double> grades) {
        if (grades == null || grades.isEmpty()) return 0.0;
        return grades.stream()
                .filter(g -> g >= 0.0 && g <= 10.0)
                .mapToDouble(Double::doubleValue)
                .average()
                .orElse(0.0);
    }
}