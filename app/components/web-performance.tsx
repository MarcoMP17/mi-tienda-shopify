"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

// Actualizar rendimiento por página con datos reales
const pagePerformance = [
  { pagina: "/cart", lcp: 953, inp: 96, cls: 0.01, cargas: 5 }, // Datos reales
  { pagina: "/checkout", lcp: 1100, inp: 110, cls: 0.03, cargas: 12 },
  { pagina: "/products", lcp: 1200, inp: 85, cls: 0.05, cargas: 150 },
  { pagina: "/home", lcp: 1800, inp: 120, cls: 0.08, cargas: 89 },
]

const performanceTrends = [
  { fecha: "28 Marzo 2025", lcp: 0, inp: 0, cls: 0 },
  { fecha: "05 Abril 2025", lcp: 1250, inp: 98, cls: 0.07 },
  { fecha: "12 Abril 2025", lcp: 1180, inp: 92, cls: 0.06 },
  { fecha: "18 Abril 2025", lcp: 1200, inp: 95, cls: 0.06 },
  { fecha: "02 Mayo 2025", lcp: 1150, inp: 88, cls: 0.04 },
  { fecha: "08 Mayo 2025", lcp: 1100, inp: 85, cls: 0.03 },
  { fecha: "15 Mayo 2025", lcp: 1080, inp: 82, cls: 0.03 },
  { fecha: "22 Mayo 2025", lcp: 1120, inp: 87, cls: 0.04 },
  { fecha: "28 Mayo 2025", lcp: 1050, inp: 80, cls: 0.02 },
  { fecha: "05 Junio 2025", lcp: 980, inp: 78, cls: 0.02 },
  { fecha: "12 Junio 2025", lcp: 953, inp: 96, cls: 0.01 },
  { fecha: "18 Junio 2025", lcp: 970, inp: 85, cls: 0.01 },
  { fecha: "25 Junio 2025", lcp: 990, inp: 88, cls: 0.02 },
]

// Actualizar con datos reales de Core Web Vitals
const coreWebVitals = [
  { metrica: "LCP (ms)", valor: 953, objetivo: 2500, estado: "Bueno" }, // Dato real
  { metrica: "INP (ms)", valor: 96, objetivo: 200, estado: "Bueno" }, // Dato real
  { metrica: "CLS", valor: 0.01, objetivo: 0.1, estado: "Excelente" }, // Dato real del /cart
]

const pageLoadDistribution = [
  { rango: "0-1s", paginas: 45, porcentaje: 35 },
  { rango: "1-2s", paginas: 52, porcentaje: 40 },
  { rango: "2-3s", paginas: 25, porcentaje: 20 },
  { rango: "3s+", paginas: 8, porcentaje: 5 },
]

// Actualizar tasa de rebote con dato real
const bounceRateData = {
  current: 37.5, // Dato real de los archivos
  previous: 42.1,
  improvement: 4.6,
}

export function WebPerformance() {
  return (
    <div className="grid gap-4">
      {/* Core Web Vitals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Rendimiento por Página</CardTitle>
            <CardDescription>Métricas Core Web Vitals</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pagePerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pagina" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="lcp" fill="#8884d8" />
                <Bar dataKey="inp" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendencias de Rendimiento</CardTitle>
            <CardDescription>Evolución temporal</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" angle={-45} textAnchor="end" height={80} fontSize={10} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="lcp" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="inp" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Distribución de carga */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Distribución de Tiempos de Carga</CardTitle>
            <CardDescription>Páginas por rango de velocidad</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pageLoadDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rango" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="paginas" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estado Core Web Vitals</CardTitle>
            <CardDescription>Comparación con objetivos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {coreWebVitals.map((vital, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <span className="font-medium">{vital.metrica}</span>
                  <div className="text-sm text-muted-foreground">Objetivo: {vital.objetivo}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{vital.valor}</div>
                  <div className={`text-xs ${vital.estado === "Bueno" ? "text-green-600" : "text-red-600"}`}>
                    {vital.estado}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Métricas de rendimiento */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>LCP Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2s</div>
            <p className="text-xs text-muted-foreground">Largest Contentful Paint</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>INP Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96ms</div>
            <p className="text-xs text-muted-foreground">Interaction to Next Paint</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CLS Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.05</div>
            <p className="text-xs text-muted-foreground">Cumulative Layout Shift</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Páginas Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">Cargan en {"<"}2s</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tasa de Rebote</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">37.5%</div> {/* Dato real */}
            <p className="text-xs text-muted-foreground">Promedio del período</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
