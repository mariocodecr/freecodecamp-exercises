function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores)
  const grade = getGrade(studentScore)
  const passed = hasPassingGrade(studentScore)

  const message = `Class average: ${average}. Your grade: ${grade}. You ${passed ? 'passed' : 'failed'} the course.`

  return message
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));