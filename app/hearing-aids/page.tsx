import ProductCatalog from '@/components/ProductCatalog'

export const metadata = {
  title: 'Hearing Aids - AFA hearing',
  description: 'Browse our selection of hearing aids and hearing devices from leading manufacturers.',
}

export default function HearingAids() {
  return (
    <div className="pt-20">
      <ProductCatalog />
    </div>
  )
}
