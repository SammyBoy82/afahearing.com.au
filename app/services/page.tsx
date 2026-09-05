import ServicesList from '@/components/ServicesList'

export const metadata = {
  title: 'Our Services - AFA hearing',
  description: 'Comprehensive hearing services including hearing tests, hearing aids, and consultations.',
}

export default function Services() {
  return (
    <div className="pt-20">
      <ServicesList />
    </div>
  )
}
