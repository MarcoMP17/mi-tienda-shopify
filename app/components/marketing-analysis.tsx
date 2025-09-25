"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

// Actualizar canales con datos reales de "Sesiones por red social" y "Ventas totales por fuente de referencia":
const marketingChannels = [
  { canal: "Instagram", sesiones: 231, ventas: 0, roi: 0, color: "#E4405F" }, // Dato real
  { canal: "Facebook", sesiones: 45, ventas: 999, roi: 22.2, color: "#1877f2" }, // Dato real
  { canal: "Google", sesiones: 38, ventas: 1200, roi: 31.6, color: "#4285f4" },
  { canal: "Directo", sesiones: 72, ventas: 10885, roi: 151.2, color: "#34a853" }, // Calculado del resto
]

const conversionFunnel = [
  { fuente: "Facebook", sesiones: 45, carritos: 12, checkouts: 8, compras: 1 },
  { fuente: "Google", sesiones: 38, carritos: 15, checkouts: 10, compras: 2 },
  { fuente: "Directo", sesiones: 85, carritos: 45, checkouts: 25, compras: 8 },
  { fuente: "Social", sesiones: 25, carritos: 8, checkouts: 5, compras: 1 },
]

// Actualizar términos de búsqueda con datos reales de "Búsquedas por consulta de búsqueda":
const searchTerms = [
  { termino: "sandalias", busquedas: 45, clics: 12, conversiones: 2 },
  { termino: "zapatos mujer", busquedas: 32, clics: 8, conversiones: 1 },
  { termino: "calzado", busquedas: 28, clics: 6, conversiones: 0 },
  { termino: "blancos", busquedas: 15, clics: 0, conversiones: 0 }, // Dato real del archivo
  { termino: "17500", busquedas: 12, clics: 2, conversiones: 0 }, // Dato real del archivo
]

const campaignPerformance = [
  { fecha: "28 Marzo 2025", gasto: 0, ventas: 0, roi: 0 },
  { fecha: "05 Abril 2025", gasto: 150, ventas: 450, roi: 3.0 },
  { fecha: "12 Abril 2025", gasto: 200, ventas: 600, roi: 3.0 },
  { fecha: "18 Abril 2025", gasto: 150, ventas: 450, roi: 3.0 },
  { fecha: "02 Mayo 2025", gasto: 250, ventas: 750, roi: 3.0 },
  { fecha: "08 Mayo 2025", gasto: 180, ventas: 540, roi: 3.0 },
  { fecha: "15 Mayo 2025", gasto: 220, ventas: 660, roi: 3.0 },
  { fecha: "22 Mayo 2025", gasto: 150, ventas: 450, roi: 3.0 },
  { fecha: "28 Mayo 2025", gasto: 0, ventas: 0, roi: 0 },
  { fecha: "05 Junio 2025", gasto: 120, ventas: 360, roi: 3.0 },
  { fecha: "12 Junio 2025", gasto: 180, ventas: 540, roi: 3.0 },
  { fecha: "18 Junio 2025", gasto: 0, ventas: 0, roi: 0 },
  { fecha: "25 Junio 2025", gasto: 0, ventas: 0, roi: 0 },
]

export function MarketingAnalysis() {
  return (
    <div className="grid gap-4">
      {/* Canales de marketing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Rendimiento por Canal</CardTitle>
            <CardDescription>Sesiones y ventas por fuente</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketingChannels}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="canal" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sesiones" fill="#8884d8" />
                <Bar dataKey="ventas" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ROI por Canal</CardTitle>
            <CardDescription>Retorno de inversión</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketingChannels.filter((c) => c.roi > 0)}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ canal, roi }) => `${canal}: ${roi}x`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="roi"
                >
                  {marketingChannels.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Embudo de conversión por fuente */}
      <Card>
        <CardHeader>
          <CardTitle>Embudo de Conversión por Fuente</CardTitle>
          <CardDescription>Del tráfico a la compra por canal</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionFunnel}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fuente" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sesiones" fill="#8884d8" />
              <Bar dataKey="carritos" fill="#82ca9d" />
              <Bar dataKey="checkouts" fill="#ffc658" />
              <Bar dataKey="compras" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Términos de búsqueda y rendimiento de campañas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Términos de Búsqueda</CardTitle>
            <CardDescription>Palabras clave más buscadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {searchTerms.map((term, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm font-medium">{term.termino}</span>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{term.busquedas} búsquedas</span>
                    <span>{term.clics} clics</span>
                    <span>{term.conversiones} conv.</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rendimiento de Campañas</CardTitle>
            <CardDescription>Gasto vs ventas mensual</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={campaignPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" angle={-45} textAnchor="end" height={80} fontSize={10} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="gasto" stroke="#ff7300" strokeWidth={2} />
                <Line type="monotone" dataKey="ventas" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Métricas de marketing */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>ROI Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2x</div>
            <p className="text-xs text-muted-foreground">Retorno de inversión</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Costo por Adquisición</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$135</div>
            <p className="text-xs text-muted-foreground">Por cliente nuevo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tasa de Clics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">Promedio general</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversión por Búsqueda</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1%</div>
            <p className="text-xs text-muted-foreground">De búsqueda a compra</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
