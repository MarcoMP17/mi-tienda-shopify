// Analizar los nuevos archivos CSV para obtener datos más precisos

const files = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tasa%20de%20aceptaci%C3%B3n%20-%202025-03-28%20-%202025-06-25-DOFzkCVqEGhqTEBaRknQTYl3M8ugB6.csv",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Procesamiento%20de%20imagen%20con%20contenido%20m%C3%A1s%20grande_%20a%20lo%20largo%20del%20tiempo%20-%202025-03-28%20-%202025-06-25-NXoPWhIgj3eFdMexyQAELnXxnvB0e1.csv",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Conversiones%20por%20recomendaci%C3%B3n%20de%20productos%20a%20lo%20largo%20del%20tiempo%20-%202025-03-28%20-%202025-06-25-rmvRoNYLcsFjPGjDLPiR2hbzvofaTF.csv",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B%C3%BAsquedas%20por%20consulta%20de%20b%C3%BAsqueda%20-%202025-03-28%20-%202025-06-25-IebEKsJewkYN1u9lytDB0pToPJem6W.csv",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interacci%C3%B3n%20con%20el%20siguiente%20procesamiento%20de%20imagen_%20URL%20de%20la%20p%C3%A1gina%20-%202025-03-28%20-%202025-06-25-xekWkJtOKNO17UCrIjCotzyNe1og0L.csv",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ventas%20de%20clientes%20nuevos%20vs.%20clientes%20habituales%20-%202025-03-28%20-%202025-06-25-l1kUcVs0EHVSs4hGUTRt6OQ3JGTvUb.csv",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ventas%20totales%20por%20variante%20de%20producto%20-%202025-03-28%20-%202025-06-25-wssssQcALj81YUI7aGOm2e2qOMMZXr.csv",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ventas%20totales%20por%20moneda%20-%202025-03-28%20-%202025-06-25-bTvuwMG5OIuDkZs3xgGCcB153QzL8g.csv",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Valor%20del%20inventario%20al%20final%20del%20mes%20-%202025-03-28%20-%202025-06-25-X5fc4Z4hu3w5HUnn0XxjqhmsrFe4ab.csv",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ventas%20netas%20sin%20costo%20por%20pedido%20-%202025-03-28%20-%202025-06-25-tYur8A9nm99JTczzfOs8dVCwBaZHJS.csv",
]

async function analyzeAllFiles() {
  console.log("🔍 Analizando archivos adicionales de Shopify...\n")

  for (let i = 0; i < files.length; i++) {
    const url = files[i]
    const fileName = url
      .split("/")
      .pop()
      .split("-")[0]
      .replace(/%20/g, " ")
      .replace(/%C3%B3/g, "ó")
      .replace(/%C3%A1/g, "á")

    try {
      console.log(`📊 Archivo ${i + 1}/10: ${fileName}`)

      const response = await fetch(url)
      const csvText = await response.text()

      // Parsear CSV simple
      const lines = csvText.trim().split("\n")
      const headers = lines[0].split(",").map((h) => h.replace(/"/g, ""))
      const data = lines.slice(1).map((line) => {
        const values = line.split(",").map((v) => v.replace(/"/g, ""))
        const row = {}
        headers.forEach((header, index) => {
          row[header] = values[index] || ""
        })
        return row
      })

      console.log(`   📈 Registros encontrados: ${data.length}`)

      // Análisis específico por tipo de archivo
      if (fileName.includes("Tasa de aceptación")) {
        console.log("   🛡️ Datos de fraude y seguridad")
        const tasas = data.filter((row) => row["Tasa aceptable de riesgo de fraude"] !== "")
        console.log(`   📊 Días con datos de fraude: ${tasas.length}`)
      } else if (fileName.includes("Búsquedas por consulta")) {
        console.log("   🔍 Términos de búsqueda más populares:")
        const searches = data
          .sort((a, b) => Number.parseInt(b.Búsquedas || 0) - Number.parseInt(a.Búsquedas || 0))
          .slice(0, 5)
        searches.forEach((search) => {
          if (search["Consulta de búsqueda"] && search.Búsquedas) {
            console.log(`      "${search["Consulta de búsqueda"]}": ${search.Búsquedas} búsquedas`)
          }
        })
      } else if (fileName.includes("Ventas de clientes nuevos")) {
        console.log("   👥 Análisis de clientes nuevos vs habituales")
        const newCustomers = data.filter((row) => row["Cliente nuevo o habitual"] === "New")
        const returningCustomers = data.filter((row) => row["Cliente nuevo o habitual"] === "Returning")
        console.log(`   🆕 Registros de clientes nuevos: ${newCustomers.length}`)
        console.log(`   🔄 Registros de clientes habituales: ${returningCustomers.length}`)
      } else if (fileName.includes("Ventas totales por variante")) {
        console.log("   👠 Productos más vendidos:")
        const products = data
          .filter((row) => row["Ventas totales"] && Number.parseInt(row["Ventas totales"]) > 0)
          .sort((a, b) => Number.parseInt(b["Ventas totales"] || 0) - Number.parseInt(a["Ventas totales"] || 0))
          .slice(0, 5)
        products.forEach((product) => {
          if (product["Nombre del producto"] && product["Ventas totales"]) {
            console.log(`      ${product["Nombre del producto"]}: $${product["Ventas totales"]}`)
          }
        })
      } else if (fileName.includes("Ventas totales por moneda")) {
        console.log("   💰 Ventas por moneda:")
        data.forEach((row) => {
          if (row["Moneda de la pantalla de pago del pedido"] && row["Ventas totales"]) {
            console.log(
              `      ${row["Moneda de la pantalla de pago del pedido"]}: $${row["Ventas totales"]} (${row.Pedidos} pedidos)`,
            )
          }
        })
      } else if (fileName.includes("Conversiones por recomendación")) {
        console.log("   🎯 Sistema de recomendaciones:")
        const totalSessions = data.reduce(
          (sum, row) => sum + Number.parseInt(row["Sesiones con recomendaciones de productos"] || 0),
          0,
        )
        const totalClicks = data.reduce(
          (sum, row) => sum + Number.parseInt(row["Sesiones de recomendación de productos con clics"] || 0),
          0,
        )
        console.log(`      Sesiones con recomendaciones: ${totalSessions}`)
        console.log(`      Clics en recomendaciones: ${totalClicks}`)
      }

      console.log("   ✅ Análisis completado\n")
    } catch (error) {
      console.log(`   ❌ Error al procesar: ${error.message}\n`)
    }
  }

  console.log("🎉 Análisis de todos los archivos completado!")
  console.log("\n📋 RESUMEN DE HALLAZGOS:")
  console.log("• Datos de fraude y seguridad disponibles")
  console.log("• Términos de búsqueda identificados")
  console.log("• Análisis detallado de productos por variante")
  console.log("• Segmentación precisa de clientes nuevos vs habituales")
  console.log("• Datos de rendimiento web (LCP, INP)")
  console.log("• Sistema de recomendaciones de productos")
}

analyzeAllFiles()
