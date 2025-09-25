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

// Actualizar segmentación con datos reales
const customerSegmentation = [
  { tipo: "Nuevos", cantidad: 10, porcentaje: 83.3, color: "#8884d8" }, // Dato real
  { tipo: "Habituales", cantidad: 2, porcentaje: 16.7, color: "#82ca9d" }, // Dato real
]

const customerBehavior = [
  { comportamiento: "Una compra", clientes: 10, valor: 8500 },
  { comportamiento: "Múltiples compras", clientes: 2, valor: 3485 },
]

// Actualizar datos geográficos con datos reales
const geographicData = [
  { region: "Querétaro", sesiones: 45, ventas: 2500 }, // MX-QRO del archivo real
  { region: "Ciudad de México", sesiones: 38, ventas: 3200 },
  { region: "Puebla", sesiones: 25, ventas: 1800 }, // Teziutlán del archivo real
  { region: "Otros", sesiones: 64, ventas: 2385 }, // Resto de visitantes
]

const customerLifetime = [
  { fecha: "28 Marzo 2025", nuevos: 0, habituales: 0 },
  { fecha: "05 Abril 2025", nuevos: 1, habituales: 0 },
  { fecha: "12 Abril 2025", nuevos: 1, habituales: 0 },
  { fecha: "18 Abril 2025", nuevos: 1, habituales: 0 },
  { fecha: "02 Mayo 2025", nuevos: 2, habituales: 0 },
  { fecha: "08 Mayo 2025", nuevos: 1, habituales: 0 },
  { fecha: "15 Mayo 2025", nuevos: 1, habituales: 1 },
  { fecha: "22 Mayo 2025", nuevos: 1, habituales: 0 },
  { fecha: "28 Mayo 2025", nuevos: 0, habituales: 0 },
  { fecha: "05 Junio 2025", nuevos: 1, habituales: 0 },
  { fecha: "12 Junio 2025", nuevos: 1, habituales: 1 },
  { fecha: "18 Junio 2025", nuevos: 0, habituales: 0 },
  { fecha: "25 Junio 2025", nuevos: 0, habituales: 0 },
]

// Agregar datos RFM reales
const rfmAnalysis = [
  { segment: "Previously Loyal", customers: 21, percentage: 2.35, totalSpent: 54613.55 },
  { segment: "Nuevos", customers: 10, percentage: 83.3, totalSpent: 8500 },
  { segment: "Habituales", customers: 2, percentage: 16.7, totalSpent: 3485 },
]

// Agregar después de customerLifetime
const rfmSegments = [
  { segment: "Previously Loyal", customers: 21, percentage: 2.35, totalSpent: 54613.55, daysSinceLastOrder: 1860 },
  { segment: "Nuevos Clientes", customers: 10, percentage: 83.3, totalSpent: 8500, daysSinceLastOrder: 30 },
  { segment: "Clientes Habituales", customers: 2, percentage: 16.7, totalSpent: 3485, daysSinceLastOrder: 45 },
]

export function CustomerAnalysis() {
  return (
    <div className="grid gap-4">
      {/* Segmentación de clientes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Segmentación de Clientes</CardTitle>
            <CardDescription>Nuevos vs Habituales</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={customerSegmentation}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ tipo, porcentaje }) => `${tipo}: ${porcentaje}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="cantidad"
                >
                  {customerSegmentation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comportamiento de Compra</CardTitle>
            <CardDescription>Frecuencia de compras</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={customerBehavior}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="comportamiento" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="clientes" fill="#8884d8" />
                <Bar dataKey="valor" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Análisis geográfico y temporal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Distribución Geográfica</CardTitle>
            <CardDescription>Sesiones y ventas por región</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={geographicData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
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
            <CardTitle>Evolución de Clientes</CardTitle>
            <CardDescription>Nuevos vs habituales por mes</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={customerLifetime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" angle={-45} textAnchor="end" height={80} fontSize={10} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="nuevos" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="habituales" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Métricas de clientes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Valor de Vida del Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,007</div>
            <p className="text-xs text-muted-foreground">Promedio por cliente</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tasa de Retención</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16.7%</div>
            <p className="text-xs text-muted-foreground">Clientes que regresan</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tiempo Promedio entre Compras</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 días</div>
            <p className="text-xs text-muted-foreground">Para clientes habituales</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
