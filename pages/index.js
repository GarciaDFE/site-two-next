import Template from "../src/components/Template"

import BannerCarousel from "../src/components/BannerCarousel"
import CompanySection from "../src/sections/CompanySection"
import ProductLineSection from "../src/sections/ProductLineSection"
import BudgetSection from "../src/sections/BudgetSection"

const HomePage = () => {
  return (
    <Template>
      <BannerCarousel element="glide-hero" />
      <CompanySection />
      <ProductLineSection />
      <BudgetSection />
    </Template>
  )
}

export default HomePage