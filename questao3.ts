type RevenueResult = {
    lowestRevenue: number | null
    highestRevenue: number | null
    daysAboveAverage: number
  }
  
  function calculateRevenue(revenue: number[]): RevenueResult {
    const validDays = revenue.filter((value) => value > 0)
  
    if (validDays.length === 0) {
      return {
        lowestRevenue: null,
        highestRevenue: null,
        daysAboveAverage: 0
      }
    }
  
    const lowestRevenue = Math.min(...validDays)
    const highestRevenue = Math.max(...validDays)
  
    const annualAverage = validDays.reduce((acc, value) => acc + value, 0) / validDays.length
  
    const daysAboveAverage = validDays.filter((value) => value > annualAverage).length
  
    return {
      lowestRevenue,
      highestRevenue,
      daysAboveAverage
    }
  }
  
  const revenue: number[] = [0, 2400, 10000, 25, 380, 1280, 0, 485, 87844, 4411, 0, 5455]
  const result = calculateRevenue(revenue)
  
  console.log(`Menor faturamento: ${result.lowestRevenue}`)
  console.log(`Maior faturamento: ${result.highestRevenue}`)
  console.log(`Dias com faturamento acima da média: ${result.daysAboveAverage}`)
  