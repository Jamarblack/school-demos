import { BookOpen, Palette, PartyPopper } from 'lucide-react';

export const MOCK_WARDS = [
  { 
    id: 1, 
    name: "Timmy Adeyemi", 
    class: "Nursery 2", 
    age: 4, 
    admissionNo: "TS/2025/042",
    avatarColor: "bg-blue-100 text-blue-700",
    theme: "blue",
    results: {
      term: "Term 1, 2026",
      summary: { total: 559, average: 93.1, position: "2nd out of 24", grade: "A+" },
      subjects: [
        { name: "Literacy & Phonics", ca: 38, exam: 57, total: 95, grade: "A", remark: "Excellent" },
        { name: "Numeracy", ca: 35, exam: 53, total: 88, grade: "B", remark: "Very Good" },
        { name: "Creative Arts", ca: 40, exam: 52, total: 92, grade: "A", remark: "Excellent" },
        { name: "Physical Development", ca: 40, exam: 60, total: 100, grade: "A+", remark: "Outstanding" },
        { name: "Basic Science", ca: 36, exam: 53, total: 89, grade: "B", remark: "Very Good" },
        { name: "Social Norms", ca: 39, exam: 56, total: 95, grade: "A", remark: "Excellent" }
      ],
      behavioral: [
        { trait: "Punctuality", rating: 5 },
        { trait: "Neatness", rating: 5 },
        { trait: "Politeness", rating: 4 },
        { trait: "Teamwork", rating: 5 },
        { trait: "Attentiveness", rating: 4 }
      ],
      attendance: 98,
      nextTerm: "January 11, 2027",
      teacherRemark: "Timmy is a highly imaginative learner. He excels in color recognition and is showing great leadership in group play.",
      headTeacherRemark: "An outstanding performance this term. Keep up the excellent work, Timmy!"
    }
  },
  { 
    id: 2, 
    name: "Sarah Adeyemi", 
    class: "Primary 1", 
    age: 6, 
    admissionNo: "TS/2024/018",
    avatarColor: "bg-yellow-100 text-yellow-700",
    theme: "yellow",
    results: {
      term: "Term 1, 2026",
      summary: { total: 546, average: 91.0, position: "4th out of 28", grade: "A" },
      subjects: [
        { name: "English Language", ca: 35, exam: 56, total: 91, grade: "A", remark: "Excellent" },
        { name: "Mathematics", ca: 32, exam: 53, total: 85, grade: "B", remark: "Very Good" },
        { name: "Basic Science", ca: 34, exam: 55, total: 89, grade: "B", remark: "Very Good" },
        { name: "Civic Education", ca: 38, exam: 58, total: 96, grade: "A", remark: "Excellent" },
        { name: "Verbal Reasoning", ca: 36, exam: 54, total: 90, grade: "A", remark: "Excellent" },
        { name: "Quantitative Reasoning", ca: 37, exam: 58, total: 95, grade: "A", remark: "Excellent" }
      ],
      behavioral: [
        { trait: "Punctuality", rating: 5 },
        { trait: "Neatness", rating: 4 },
        { trait: "Politeness", rating: 5 },
        { trait: "Teamwork", rating: 4 },
        { trait: "Attentiveness", rating: 5 }
      ],
      attendance: 100,
      nextTerm: "January 11, 2027",
      teacherRemark: "Sarah is adapting wonderfully to Primary 1. Her reading fluency has improved drastically this term.",
      headTeacherRemark: "A brilliant result. Sarah is a joy to have in the school."
    }
  }
];

export const MOCK_FEES = [
  { id: 'f1', title: "First Term Tuition", amount: 150000, category: "Tuition", icon: BookOpen, color: "text-blue-600 bg-blue-100" },
  { id: 'f2', title: "New Rainbow Uniform", amount: 25000, category: "Apparel", icon: Palette, color: "text-red-600 bg-red-100" },
  { id: 'f3', title: "Zoo Excursion", amount: 10000, category: "Activity", icon: PartyPopper, color: "text-yellow-600 bg-yellow-100" }
];

export const UPCOMING_EVENTS = [
  { id: 1, title: "Red Color Day", date: "Oct 15", description: "Wear red! We're learning about apples, fire trucks, and the heart.", type: "red" },
  { id: 2, title: "PTA Open House", date: "Oct 20", description: "Meet the teachers and see the new play area.", type: "blue" }
];