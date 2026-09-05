import AppointmentForm from '@/components/AppointmentForm'

export const metadata = {
  title: 'Book an Appointment - AFA hearing',
  description: 'Schedule your hearing test or consultation at AFA hearing Melbourne.',
}

export default function Appointments() {
  return (
    <div className="pt-20">
      <AppointmentForm />
    </div>
  )
}
