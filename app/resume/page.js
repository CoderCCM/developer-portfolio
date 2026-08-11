import { redirect } from 'next/navigation'

export default function Resume() {
  // Redirect to the PDF placed in `public/resumes`
  redirect('/resumes/ConnorMagnusonResume.pdf')
}
