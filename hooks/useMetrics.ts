import { useContext } from "react"
import { MetricsContext } from "../contexts/MetricsProvider"

export const useMetrics = () => {
  const { 
    period,
    range,
    domainsCreated,
    identitiesCreated,
    uniqueAddresses,
    oneLetter,
    twoLetters,
    threeLetters,
    fourLetters,
    nineNineClub,
    tripleNineClub,
    tenKClub,
    domainRegistrations,
    domainRenewals,
    periodRangeForCharts: periodRange,
    expiredDomains,
    currentPeriodRange,
    changePeriod,
    changeRange,
  } = useContext(MetricsContext);
  return {
    period,
    range,
    domainsCreated,
    identitiesCreated,
    uniqueAddresses,
    oneLetter,
    twoLetters,
    threeLetters,
    fourLetters,
    nineNineClub,
    tripleNineClub,
    tenKClub,
    domainRegistrations,
    domainRenewals,
    periodRange,
    expiredDomains,
    currentPeriodRange,
    changePeriod,
    changeRange
  }
}