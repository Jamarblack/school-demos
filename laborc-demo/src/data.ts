import { BookOpen, Shirt, Landmark } from 'lucide-react';

export const MOCK_WARDS = [
  { 
    id: 1, 
    name: "Emmanuel Olatunji", 
    class: "JSS 2", 
    age: 12, 
    admissionNo: "LS/2023/089",
    avatarColor: "bg-green-100 text-green-700",
    theme: "green",
    results: {
      term: "First Term, 2026",
      summary: { total: 615, average: 76.8, position: "8th out of 42", grade: "B" },
      subjects: [
        { name: "Mathematics", ca: 28, exam: 45, total: 73, grade: "B", remark: "Good" },
        { name: "English Language", ca: 32, exam: 50, total: 82, grade: "A", remark: "Excellent" },
        { name: "Basic Science", ca: 30, exam: 48, total: 78, grade: "B", remark: "Very Good" },
        { name: "Civic Education", ca: 35, exam: 55, total: 90, grade: "A", remark: "Excellent" },
        { name: "Agricultural Science", ca: 25, exam: 42, total: 67, grade: "C", remark: "Fair" },
        { name: "Business Studies", ca: 31, exam: 49, total: 80, grade: "A", remark: "Excellent" }
      ],
      behavioral: [
        { trait: "Punctuality", rating: 4 },
        { trait: "Neatness", rating: 5 },
        { trait: "Politeness", rating: 4 },
        { trait: "Teamwork", rating: 4 },
        { trait: "Attentiveness", rating: 3 }
      ],
      attendance: 95,
      nextTerm: "January 11, 2027",
      teacherRemark: "Emmanuel is a diligent student with a strong grasp of languages. He needs to pay slightly more attention during Science practicals.",
      headTeacherRemark: "A commendable performance. Keep striving for excellence."
    }
  }
];

export const MOCK_FEES = [
  { id: 'f1', title: "First Term Tuition", amount: 35000, category: "Tuition", icon: BookOpen, color: "text-emerald-600 bg-emerald-100" },
  { id: 'f2', title: "School Uniform (2 Pairs)", amount: 15000, category: "Apparel", icon: Shirt, color: "text-slate-600 bg-slate-100" },
  { id: 'f3', title: "PTA / Development Levy", amount: 5000, category: "Administrative", icon: Landmark, color: "text-yellow-600 bg-yellow-100" }
];

export const UPCOMING_EVENTS = [
  { id: 1, title: "Inter-House Sports", date: "Nov 12", description: "Annual athletic competition at the community field.", type: "green" },
  { id: 2, title: "Open Day", date: "Nov 28", description: "Parents are invited to review student performance.", type: "slate" }
];